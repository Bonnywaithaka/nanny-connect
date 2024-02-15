const ConvertStringToDate = (dateString) => {
  if (!dateString) {
    return dateString;
  }
  const dateToConvert = dateString.toString();
  const year = dateToConvert.substring(0, 4);
  const month = dateToConvert.substring(4, 6);
  const day = dateToConvert.substring(6, 8);
  return new Date(`${year}-${month}-${day}`);
};

export default ConvertStringToDate;
