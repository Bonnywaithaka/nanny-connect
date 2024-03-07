import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LandingPage() {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        color="#fff"
        marginTop={20}
        marginBottom="230px"
      >
        <Box>
          <Typography variant="h1">Nanny Connect</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" width="40%">
          <Typography>HOW IT WORKS</Typography>
          <Typography>PRICES AND SERVICES</Typography>
          <Typography>ABOUT US</Typography>
          <Typography>FAQs</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              paddingLeft: "50px",
              paddingRight: "50px",
              borderRadius: "10px",
            }}
            onClick={() => router.push("/sign-in")}
          >
            sign In
          </Button>
        </Box>
      </Box>
      <Box color="#fff" display="flex" justifyContent="space-between">
        <Box width="50%">
          <Typography variant="h1">
            Where Heartfelt Care meets Hassle-Free House helps
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" padding="20px">
          <Box marginBottom={20}>
            {/* <Link href={{
              pathname:"/sign-up",
              query:{type:"nanny"}
            }}> */}
              <Button
                variant="outlined"
                size="large"
                sx={{
                  paddingRight: "70px",
                  paddingLeft: "70px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderRadius: "5px",
                  color: "#fff",
                  border: "1px solid #fff",
                  borderColor: "#fff",
                }}
                onClick={() => router.push("/sign-up")}
              >
                Become A Nanny
              </Button>
            {/* </Link> */}
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                paddingRight: "100px",
                paddingLeft: "100px",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Hire Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
