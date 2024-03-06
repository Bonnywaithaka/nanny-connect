import SignUpContainer from "@/forms/SignUpForm";
import { Box, Card } from "@mui/material";
import React from "react";

function SignUpPage() {
  return (
    <Box>
      <Card
        sx={{
          width: "40%",
          margin: "100px",
          padding: "100px",
        }}
      >
        <SignUpContainer />
      </Card>
    </Box>
  );
}

export default SignUpPage;
