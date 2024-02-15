import { BubbleChart, CastSharp, Flaky, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { green, red } from "@mui/material/colors";

function Achievements() {
  return (
    <Box
      marginTop={100}
      marginBottom={100}
      padding={20}
      bgcolor="#35A839"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography variant="h2" lineHeight={2}>
          What We Have Achieved
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" lineHeight={1}>
          Our innovation management team is working around the clock to bring
          your ideas to life
        </Typography>
      </Box>
      <Box width="100%" marginTop={30} color="#262626">
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    <CastSharp />
                  </Avatar>
                }
                title={
                  <Typography variant="h3" color="#262626">
                    100+
                  </Typography>
                }
                subheader={
                  <Typography variant="h6">Innovations Implemented</Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    <BubbleChart />
                  </Avatar>
                }
                title={<Typography variant="h3">32</Typography>}
                subheader={
                  <Typography variant="h6">Innovations Implemented</Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    <Flaky />
                  </Avatar>
                }
                title={<Typography variant="h3">32,565,232</Typography>}
                subheader={
                  <Typography variant="h6">Total Idea Funding</Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    <CastSharp />
                  </Avatar>
                }
                title={<Typography variant="h3">32,565,232</Typography>}
                subheader={
                  <Typography variant="h6">Revenue from innovations</Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Achievements;
