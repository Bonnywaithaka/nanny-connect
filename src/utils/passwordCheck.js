const passwordCheck = (password) => {
  let results = false;
  const passwordCondition =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (password.match(passwordCondition)) {
    results = true;
  }
  return results;
};

export default passwordCheck;
