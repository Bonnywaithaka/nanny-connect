import { useRouter } from "next/router";

// This should be used as a function and not a react component
const Redirect = (path = "/") => {
  const router = useRouter();
  return router.push(path);
};

export default Redirect;
