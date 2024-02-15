import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is the purpose of this innovation portal?",
    answer: "be innovative",
  },
  {
    id: 2,
    question: "What is the purpose of this innovation portal?",
    answer: "be innovative",
  },
  {
    id: 3,
    question: "What is the purpose of this innovation portal?",
    answer: "be innovative",
  },
  {
    id: 4,
    question: "What is the purpose of this innovation portal?",
    answer: "be innovative",
  },
  {
    id: 5,
    question: "What is the purpose of this innovation portal?",
    answer: "be innovative",
  },
];
function FaqsPage() {
  return (
    <Box>
      <Box marginBottom={30}>
        <Typography variant="h3" color="primary">
          FAQs
        </Typography>
      </Box>
      <Box>
        {faqs?.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h3">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FaqsPage;
