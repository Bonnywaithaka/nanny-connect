import { reviewProps } from "@/containers/Nanny/Account/tabContent/Reviews";
import { Person } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export interface employerReviewsProps {
  //   employer: string;
  review: reviewProps;
}
function ReviewsCard({ review }: employerReviewsProps) {
  return (
    <Box display="flex" margin="30px 0px">
      <Box margin="0px 10px">
        <Avatar
          sx={{
            bgcolor: "red",
          }}
        >
          <Person />
        </Avatar>
      </Box>
      <Box>
        <Box>
          <Typography variant="h4">{review?.employer}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">on {review?.reviewDate}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">{review?.review}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewsCard;
