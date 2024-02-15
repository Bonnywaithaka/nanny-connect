import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import success1 from "../../../public/images/sucess1.svg";

const successData = [
  {
    id: 1,
    name: "my subscriptions",
  },
  {
    id: 2,
    name: "my subscriptions",
  },
  {
    id: 3,
    name: "my subscriptions",
  },
  {
    id: 4,
    name: "my subscriptions",
  },
];
function SuccessStories() {
  return (
    <Box>
      <Box>
        <Typography color="primary" variant="h3">
          Success Stories
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {successData.map((data) => (
            <Grid item md={3} key={data.id}>
              <Image src={success1} alt="success" width="300" height="200" />
              <Typography>My subscriptions</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default SuccessStories;
