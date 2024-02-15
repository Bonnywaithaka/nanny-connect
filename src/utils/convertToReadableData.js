const ConvertToReadableData = (amount) => {
  const data = { amount, measurementUnits: "BYTES" };
  const kbs = Number(amount) / 1024;
  const mbs = Number(amount) / 1024 / 1024;
  const gbs = Number(amount) / 1024 / 1024 / 1024;

  if (Math.trunc(kbs) > 0 && Math.trunc(mbs) === 0) {
    // we can fall back to kbs
    data.amount = Math.round((Number(amount) / 1024) * 1000) / 1000;
    data.measurementUnits = "KB";
  }
  if (Math.trunc(mbs) > 0) {
    // we can fall back to mbs
    data.amount = Math.round((Number(amount) / 1024 / 1024) * 1000) / 1000;
    data.measurementUnits = "MB";
  }
  if (Math.trunc(gbs) > 0) {
    // we can fall back to gbs
    data.amount =
      Math.round((Number(amount) / 1024 / 1024 / 1024) * 1000) / 1000;
    data.measurementUnits = "GB";
  }
  return data;
};

export default ConvertToReadableData;
