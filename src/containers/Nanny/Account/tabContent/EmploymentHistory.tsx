import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const employment = [
  {
    id: "1",
    employer: "Catherine Njogu",
    level: "Basic",
    startDate: "20-01-2010",
    endDate: "01-05-2013",
  },
  {
    id: "2",
    employer: "John Mwangi",
    level: "Basic",
    startDate: "20-01-2010",
    endDate: "01-05-2013",
  },
  {
    id: "3",
    employer: "Everline Teddy",
    level: "Basic",
    startDate: "20-01-2010",
    endDate: "01-05-2013",
  },
];

function EmploymentHistory() {
  return (
    <Box marginTop={50}>
      <Grid container spacing={4}>
        {employment.map((emp) => (
          <Grid item md={6} key={emp.id} >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Box margin="10px 20px">
                  <Avatar
                    sx={{
                      bgcolor: "#000",
                    }}
                  >
                    Test
                  </Avatar>
                </Box>
                <Box margin="10px 10px">
                  <Typography variant="h6" color="secondary">
                    {emp.level}
                  </Typography>
                  <Typography variant="h3">{emp.employer}</Typography>
                </Box>
              </AccordionSummary>
              <Box marginLeft={100}>
                <AccordionDetails>
                  <Typography>From: {emp.startDate}</Typography>
                  <Typography>To: {emp.endDate}</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Box>
                    <Button variant="contained" fullWidth>
                      Details
                    </Button>
                  </Box>
                </AccordionDetails>
              </Box>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EmploymentHistory;
