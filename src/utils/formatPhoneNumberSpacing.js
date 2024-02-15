function FormatPhoneNumberSpacing(phoneNumber) {
  let phone = phoneNumber;
  if (phone.length === 9) {
    phone = `0${phoneNumber}`;
  }
  if (phone.substring(0, 3) === "254") {
    phone = phone.replace("254", "0");
  }
  const cleaned = `${phone}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return null;
}

export default FormatPhoneNumberSpacing;
