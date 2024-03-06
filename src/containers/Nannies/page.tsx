import Nannycomponent from "@/components/NannyCardComponent";
import Nannycomponen from "@/components/NannyCardComponent";
import InputField from "@/components/SearchInput";
import { KeyboardArrowDownRounded, Search } from "@mui/icons-material";
import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";

const nannies = [
  {
    id: "1",
    name: "Borniface Onyango",
    rating: "5",
    experience: "5",
    salary: "40,000",
    profile:
      "https://images.pexels.com/photos/18053574/pexels-photo-18053574/free-photo-of-a-man-standing-on-a-boardwalk-and-taking-a-picture-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    employers: [
      {
        id: "1",
        empName: "Boniface Waithaka",
        startDate: "10-02-2023",
        endDate: "30-03-2024",
      },
      {
        id: "2",
        empName: "Gloria Waithaka",
        startDate: "10-02-2022",
        endDate: "30-03-2023",
      },
    ],
  },
  {
    id: "2",
    name: "Borniface Onyango",
    rating: "5",
    experience: "5",
    salary: "40,000",
    profile:
      "https://images.pexels.com/photos/18053574/pexels-photo-18053574/free-photo-of-a-man-standing-on-a-boardwalk-and-taking-a-picture-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Borniface Onyango",
    rating: "5",
    experience: "5",
    salary: "40,000",
    profile:
      "https://images.pexels.com/photos/18053574/pexels-photo-18053574/free-photo-of-a-man-standing-on-a-boardwalk-and-taking-a-picture-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function NanniesAvailable() {
  return (
    <Box display="flex">
      <Box
        sx={{
          border: "3px solid grey",
          width: "20%",
          height: "100vh",
          padding: "200px 30px",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h3">Price Range</Typography>
        <Box display="flex" flexDirection="column">
          <InputField icon={<Search />} text="From" />
          <InputField icon={<Search />} text="To" />
        </Box>
        <Box margin="20px 10px">
          <Button variant="contained" fullWidth>
            Set
          </Button>
        </Box>
      </Box>
      <Box width="80%">
        <Box display="flex" justifyContent="flex-end" margin={50}>
          <Box display="flex" margin="30px 20px">
            <Typography variant="h3">Sorted by:</Typography>
          </Box>
          <Box>
            <InputField text="Recomended" icon={<KeyboardArrowDownRounded />} />
          </Box>
        </Box>
        <Box>
          {nannies?.map((nanny) => (
            <Nannycomponent key={nanny.id} nanny={nanny} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default NanniesAvailable;
