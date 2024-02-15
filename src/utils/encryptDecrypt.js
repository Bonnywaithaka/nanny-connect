import crypto from "crypto";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
const initializationVector = process.env.NEXT_PUBLIC_INITIALIZATION_VECTOR;

// The CipherIV methods must take the inputs as a binary / buffer values.
const binaryEncryptionKey = Buffer.from(encryptionKey, "base64");
const binaryIV = Buffer.from(initializationVector, "base64");

export const encrypt = (input) => {
  const cipher = crypto.createCipheriv(
    "AES-128-CBC",
    binaryEncryptionKey,
    binaryIV,
  );

  // When encrypting, we're converting the UTF-8 input to base64 output.
  return cipher.update(input, "utf8", "base64") + cipher.final("base64");
};

export const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(
    "AES-128-CBC",
    binaryEncryptionKey,
    binaryIV,
  );

  // When decrypting we're converting the base64 input to UTF-8 output.
  return (
    decipher.update(encryptedText, "base64", "utf8") + decipher.final("utf8")
  );
};
