import { Twitter, X, YouTube } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        padding: "50px",
        backgroundColor: "#000",
        height: "366px",
      }}
    >
      <Box>
        <Typography color="#35A839" variant="h2" fontSize={34}>
          Safaricom
        </Typography>
        <Typography color="#fff" variant="h2" fontSize={20}>
          Innovation Portal
        </Typography>
        <Typography color="#fff" marginTop={20}>
          We are working to create an innovation ecosystem where everyone feels
          free to submit their
          <br /> ideas and see them transform our organization and the world.
        </Typography>
      </Box>
      <Box marginTop={50} display="flex">
        <Box paddingTop={5}>
          <X
            style={{
              color: "#fff",
              fontSize: "20px",
              marginRight: "30px",
            }}
          />
        </Box>
        <Box>
          <YouTube
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
        </Box>
      </Box>
      <Divider />
      <Box color="#fff" display="flex" justifyContent="center">
        <Typography>Copyright @ 2020 Safaricom PLC.</Typography>
        <Divider orientation="vertical" />
        <Typography>Terms and Conditions</Typography>
        <Divider orientation="vertical" />
        <Typography>Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
