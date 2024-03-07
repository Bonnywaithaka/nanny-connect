"use client";

import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BellDIIcon from "@/components/Icons/BellDIIcon";
import { Divider, SelectChangeEvent, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import LogoutIcon from "../../../components/Icons/LogoutIcon";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import MenuComponent from "../../../components/Menu";

function TopAppBar() {
  const menuRef = React.useRef(null);
  const [selected, setSelected] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  const options = [
    {
      name: "My Profile",
      icon: <ProfileIcon />,
    },
    {
      name: "Log-Out",
      icon: <LogoutIcon />,
    },
  ];

  const realms = [
    {
      value: "master",
      label: "Master Realm",
    },
    {
      value: "new",
      label: "New Realm",
    },
  ];

  return (
    <Box
      display="flex"
      sx={{
        flexGrow: 1,
        width: "100%",
        ml: "224px",
        height: "100px",
      }}
    >
      <Box display="flex" width="100%" bgcolor="unset" margin={23}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="space-between" width="30%">
            <Box>
              <Typography variant="h1" color="primary">
                Nanny Connect
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="30%"
            sx={{
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              border: "1px solid grey",
              borderRadius: "50px",
              padding: "10px",
            }}
          >
            <InputBase
              name="search"
              placeholder="Search by keywords..."
              startAdornment={<Search />}
              fullWidth
            />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="30%"
          >
            <Box paddingTop={10} width={40} height={50}>
              <BellDIIcon />
            </Box>
            <Box
              ml="25px"
              sx={{
                justifySelf: "flex-end",
              }}
            >
              <MenuComponent
                title={
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      fontSize: "14px",
                      background: "white",
                      color: "#00B7FB",
                    }}
                  >
                    Bthairu
                  </Avatar>
                }
                ref={menuRef}
                menuChild={options.map((option) => (
                  <MenuItem
                    key={option.name}
                    selected={option.name === selected}
                    onChange={handleChange}
                    sx={{
                      h: "20px",
                      my: "4px",
                    }}
                  >
                    {option.icon}
                    <Typography ml="4px">{option.name}</Typography>
                  </MenuItem>
                ))}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopAppBar;
