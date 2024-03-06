import ReviewsCard from "@/components/ReviewsComponent";
import { Box } from "@mui/material";
import React from "react";

export interface reviewProps {
  id: string;
  employer: string;
  reviewDate: string;
  review: string;
}
const reviews: reviewProps[] = [
  {
    id: "1",
    employer: "Angela Kandie",
    reviewDate: "10-Feb-2024",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    id: "2",
    employer: "David Iguta",
    reviewDate: "10-Feb-2024",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    id: "3",
    employer: "Walter Ochieng",
    reviewDate: "10-Feb-2024",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
];

function Reviews() {
  return (
    <Box margin="20px 20px">
      {reviews.map((review) => (
        <ReviewsCard key={review.id} review={review} />
      ))}
    </Box>
  );
}

export default Reviews;
