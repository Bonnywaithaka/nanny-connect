import SignIn from "@/containers/SignIn";
import SIgnInForm from "@/forms/SignInForm";
import { Box, Card } from "@mui/material";
import React from "react";

function page() {
  return (
    <Box
      sx={{
        paddingX: "600px",
        paddingY: "100px",
      }}
    >
      <Card
        sx={{
          width:"40%",
          margin:"100px",
          padding: "100px",
        }}
      >
        <SIgnInForm />
      </Card>
    </Box>
  );
}

export default page;
