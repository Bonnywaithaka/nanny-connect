const trimString = (string, length) => {
  let ellipsis = "...";
  if (string.length <= length) {
    ellipsis = "";
  }
  return `${string.substring(0, length)}${ellipsis}`;
};

export default trimString;
