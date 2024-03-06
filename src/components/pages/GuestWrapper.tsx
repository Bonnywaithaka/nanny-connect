import React from "react";
import Container from "@mui/material/Container";
import Topbar from "./Topbar";
import Footer from "../Footer";
import { Box } from "@mui/material";
import Image from "next/image";
import innovationsBanner from "../../../public/images/Banner.svg";


interface GuestWrapperProps {
  children?: React.ReactNode;
}

function GuestWrapper(props: GuestWrapperProps) {
  return (
    <div>
      {/* <Topbar /> */}
      <main>
        <Box>
        <Image
          src={innovationsBanner}
          alt="/"
          layout="fill"
          objectFit="cover"
        />
        <Container maxWidth="xl" >{props.children}</Container>     
        </Box>
        
      </main>
      <Footer />
    </div>
  );
}

export default GuestWrapper;
