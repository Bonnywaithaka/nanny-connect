const checkSecureNetStatus = (list) => {
  if (Array.isArray(list) && list.length > 0) {
    let status = false;
    for (let x = 0; x < list.length; x += 1) {
      if (
        list[x].secureNetStatus === "existing" ||
        list[x].secureNetStatus === "active"
      ) {
        status = true;
        break;
      }
    }
    return status;
  }
  return false;
};

export default checkSecureNetStatus;
