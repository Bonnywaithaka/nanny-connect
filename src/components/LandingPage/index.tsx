import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import innovationsBanner from "../../../public/images/Banner.svg";
import SuccessStories from "./SuccessStories";
import Achievements from "./Achievements";
import FaqsPage from "../FaqsPage";

function LandingPage() {
  return (
    <Box width="100%" marginTop={18}>
      <Grid container spacing={2} display="flex" justifyContent="space-between">
        <Grid item md={5}>
          <Box>
            <Typography variant="h2" fontSize={40} fontWeight={400}>
              Pioneering the future.
              <br />
              Explore, Create, Innovate
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h6"
              lineHeight={1}
              fontSize={20}
              fontWeight={400}
            >
              Step into a world where innovation knows no boundaries, a realm
              where the extraordinary becomes routine, and the status quo is an
              ever-shifting canvas of potential.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                textDecoration: "none",
              }}
            >
              Submit an Idea
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Image
              src={innovationsBanner}
              alt="banner"
              width={769}
              height={539}
            />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <SuccessStories />
        <Achievements />
        <FaqsPage />
      </Box>
    </Box>
  );
}

export default LandingPage;
