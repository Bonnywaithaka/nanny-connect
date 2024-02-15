export const passwordRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

// the below are backend messages that are returned when there is no JWT token attached.
export const backendMessages = [
  "Sorry, we were unable to retrieve your number. Please switch to Safaricom Mobile Data on your device, or try again later.",
  "Please switch to Safaricom Mobile Data" +
    " to view your newspapers ( No Data Charges on the E-Newspaper Service)",
  "The ip used for this request is not similar to the one used to request this token",
];

export const phoneRegex = /^(\+254|0|254)*[071]\d{8}$/;
