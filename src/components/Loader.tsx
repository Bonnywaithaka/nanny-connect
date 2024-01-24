import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const Wrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  margin: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export default function CircularIndeterminate({ height = "100vh" }) {
  return (
    <Wrapper
      sx={{
        height,
      }}
    >
      <StyledCircularProgress />
    </Wrapper>
  );
}
