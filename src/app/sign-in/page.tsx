import SignIn from "@/containers/SignIn";
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
          paddingX: "100px",
          paddingY: "100px",
        }}
      >
        <SignIn />
      </Card>
    </Box>
  );
}

export default page;
