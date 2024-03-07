"use client";

import { AccountCircle } from "@mui/icons-material";
import { Avatar, Box, Button, Input, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Dialog from "@/components/Dialog";
import profile from "../../../public/images/profile/image.png";

function Nannycomponent({ nanny }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        border: "3px solid grey",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "10px",
        minHeight: "200px",
      }}
    >
      <Box width="25%">
        <Image src={profile} alt="profile" width={200} height={200} />
      </Box>
      <Box width="20%">
      <Typography variant="h5" color={nanny.color}>{nanny.package}</Typography>
        <Typography variant="h3">{nanny.name}</Typography>
        <Typography>{nanny.rating} (10 reviews)</Typography>
        <Typography>View All Reviews & Profile</Typography>
        <Button variant="contained" fullWidth onClick={handleOpen}>
          HIRE
        </Button>
      </Box>
      <Box width="33%">
        {nanny?.employers?.map((emp) => (
          <Box key={emp.id} marginTop={10}>
            <Box display="flex">
              <AccountCircle />
              <Typography variant="h4">{emp.empName}</Typography>
            </Box>
            <Box marginLeft={30}>
              <Typography variant="h6">on {emp.startDate}</Typography>
              <Typography variant="h5">View All Reviews & Profile</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography variant="h3">KES. {nanny.salary} / Month</Typography>
      </Box>
      <Dialog
        open={open}
        handleClose={handleClose}
        modalContent={
          <Box>
            <Box margin="20px 50px">
              <Typography variant="h3">
                Please Pay A one time fee to proceed
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-evenly">
              <Box>
                <Typography variant="h1" fontSize={20}>
                  KSh 5,000 for premium Nanny
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "yellow",
                  }}
                >
                  Change Plan
                </Button>
              </Box>
            </Box>
            <Box
              padding="40px 20px"
              display="flex"
              justifyContent="space-evenly"
            >
              <Button variant="contained" sx={{ color: "#fff" }}>
                Pay with M-pesa
              </Button>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        }
      />
    </Box>
  );
}

export default Nannycomponent;
