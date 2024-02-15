import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import SafaricomLogo from "../../../public/saf-logo.png";

function TopAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" width="10%">
            <Box>
              <Image src={SafaricomLogo} alt="/logo" width={200} height={40} />
            </Box>
            <Box padding={15}>
              <Typography
                sx={(theme) => ({
                  flexGrow: 1,

                  [theme.breakpoints.up("sm")]: {
                    display: "block",
                  },
                })}
                color="#000"
                fontWeight={900}
                variant="h1"
                fontSize={20}
                noWrap
              >
                INNOVATE
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            color="#000"
            justifyContent="flex-start"
            width="40%"
          >
            <Box marginRight={30}>
              <Link href="/">Home</Link>
            </Box>
            <Box>
              <Link href="/innovation-challenges">Innovation Challenges</Link>
            </Box>
          </Box>
          <Box display="flex" marginRight={50}>
            <Box>
              <Button
                variant="contained"
                sx={{
                  paddingX: "300px",
                  paddingY: "5px",
                  marginRight: "30px",
                }}
              >
                Login
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  paddingX: "10px",
                  paddingY: "5px",
                }}
              >
                Submit an Idea
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopAppBar;
