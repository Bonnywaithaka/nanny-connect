import React from "react";
import Container from "@mui/material/Container";
import Topbar from "./Topbar";
import Footer from "../Footer";

interface GuestWrapperProps {
  children?: React.ReactNode;
}

function GuestWrapper(props: GuestWrapperProps) {
  return (
    <div>
      <Topbar />
      <main>
        <Container maxWidth="xl">{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
}

export default GuestWrapper;
