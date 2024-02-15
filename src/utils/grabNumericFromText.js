// initially used for free data; defaults to 100MBs if no numeric is seen
const GrabNumericFromText = (text) => {
  const numberPattern = /\d+/;
  const match = text.match(numberPattern);
  const number = match == null ? 100 : match[0];
  return number;
};

export default GrabNumericFromText;
