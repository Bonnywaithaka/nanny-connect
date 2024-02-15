const CapitalizeFirstLetter = (s) => {
  if (typeof s !== "string") return "";
  const word = s.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default CapitalizeFirstLetter;
