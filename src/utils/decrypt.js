import crypto from "crypto";

const decrypt = (encryptedText) => {
  const mykey = crypto.createDecipher("aes-256-cbc", "&5$2!84Hys%1*1Bx$%|");
  const mystr = mykey.update(encryptedText, "hex", "utf8");
  const keyFinal = mykey.final("utf8");
  return `${mystr}${keyFinal}`;
};

export default decrypt;
