const stringAvatar = (name) => {
  const nameSplit = name.split(" ");
  return {
    children: `${
      nameSplit.length > 0 ? `${nameSplit[0][0]} ${nameSplit[1][0]}` : ""
    }`,
  };
};

export default stringAvatar;
