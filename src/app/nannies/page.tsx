import NanniesAvailable from "@/containers/Nannies/page";
import { Box } from "@mui/material";
import React from "react";
import MainLayout from "../layout/mainLayout";

function NanniesLandingPage() {
  return (
    <MainLayout>
      <NanniesAvailable />
    </MainLayout>
  );
}

export default NanniesLandingPage;
