const monthNames: string[] = [
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

const FormatDate = (
  timeStamp: string,
  timeInclude: boolean,
  string: boolean = false,
) => {
  const currentDate = string
    ? new Date(timeStamp.replace(" ", "T"))
    : new Date(timeStamp);
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();

  const sday: string = (day < 10 ? "0" : "") + day;
  const shour: string = (hour < 10 ? "0" : "") + hour;
  const smin: string = (min < 10 ? "0" : "") + min;
  const ssec: string = (sec < 10 ? "0" : "") + sec;

  const time = timeInclude ? ` ${shour}:${smin}:${ssec}` : "";

  return `${
    monthNames[month - 1]
  } ${sday}, ${currentDate.getFullYear()}${time}`;
};

export default FormatDate;
