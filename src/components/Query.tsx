// @ts-nocheck
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery, NetworkStatus } from "@apollo/client";
import Box from "@mui/material/Box";
import Loader from "./Loader";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";
// import MainErrorPage from "./MainErrorPage";
import ErrorHandler from "../utils/errorHandler";
import { backendMessages } from "../utils/constants";
// import RobotHead from "../../public/images/svg/RobotHead.svg";

const printErrorMessage = (error) => {
  let message =
    error.message ||
    "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
  if (error.message === "Network error: Failed to fetch") {
    message =
      "Sorry! We encountered a network error. Please refresh this page. If the problem persists, please contact @Safaricom_Care on Twitter.";
  }
  return ErrorHandler(message);
};

function Query({
  children,
  fetchMore,
  loader,
  query,
  hideError = false,
  operation,
  ...restProps
}) {
  const {
    loading,
    error,
    data,
    networkStatus,
    fetchMore: apolloFetchMore,
    refetch,
  } = useQuery(query, { ...restProps });
  const router = useRouter();
  if (error && hideError === false) {
    let message;
    if (printErrorMessage(error).match(/Network error.*/)) {
      message =
        "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
    } else if (
      operation === "getToken" &&
      backendMessages[0] === error.message
    ) {
      // we need to fake a success message
      const fakeProps = {
        getToken: {
          hash: "",
          token: "",
          proceed: false,
          status: false,
          message: error.message,
          __typename: "MobileResult",
        },
        networkStatus,
        fetchMore: fetchMore
          ? () => fetchMore(data, apolloFetchMore)
          : undefined,
        refetch,
      };
      return children(fakeProps);
    } else {
      message = printErrorMessage(error);
    }
    if (
      message ===
      "Sorry for the inconvenience, the requested page is currently under maintenance"
    ) {
      return router.push({
        pathname: `/maintenance`,
        query: { maintenance: true },
      });
    }

    if (
      message ===
      "The ip used for this request is not similar to the one used to request this token"
    ) {
      message = "Sorry, we encountered an error. Please refresh this page.";
    }

    // const errorCode = getErrorCode(error);
    // TODO: check errorPolicy and if === 'all' then pass thru render props all extracted/formated errors with errorcodes instead of inline error message

    return (
      <Box component="div">
        <MySnackbarContentWrapper
          variant="danger"
          variantText="dangerText"
          message={`${ErrorHandler(message)}`}
        />
      </Box>
    );
  }

  if (
    networkStatus === NetworkStatus.loading ||
    (networkStatus !== NetworkStatus.fetchMore && loading)
  ) {
    return loader || <Loader />;
  }

  const props = {
    ...data,
    networkStatus,
    fetchMore: fetchMore ? () => fetchMore(data, apolloFetchMore) : undefined,
    refetch,
  };

  return children(props);
}

export default Query;
