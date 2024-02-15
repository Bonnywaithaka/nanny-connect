const getShareUrl = () => {
  const fullUrl = document.location.href;
  const { search } = document.location;
  return fullUrl.replace(search, "");
};

export default getShareUrl;
