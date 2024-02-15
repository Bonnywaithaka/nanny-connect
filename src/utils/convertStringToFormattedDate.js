const ConvertStringToFormattedDate = (dateString) => {
  if (!dateString) {
    return dateString;
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateToConvert = dateString.toString();
  const year = dateToConvert.substring(0, 4);
  const monthCount = dateToConvert.substring(4, 6);
  const day = dateToConvert.substring(6, 9);

  const convertedDate = `${day}-${monthNames[monthCount - 1]}-${year}`;
  return convertedDate;
};

export default ConvertStringToFormattedDate;
