"use client";
import React, from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import SideBar from "./Sidebar";
import TopAppBar from "./TopBar";

function MainLayout({ children }) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#fff",
          }}
        >
          <TopAppBar />
        </AppBar>
        <main>
          <Box
            paddingRight="100px"
            bgcolor="#F9F9FF"
            sx={{
              minHeight: "100vh",
              marginTop: "50px",
              width: "100vw",
            }}
          >
            <Toolbar />
            <Container
              maxWidth={false}
              sx={{
                padding: { xs: 0, xl: 0 },
              }}
            >
              {children}
            </Container>
          </Box>
        </main>
      </Box>
    </div>
  );
}

export default MainLayout;
