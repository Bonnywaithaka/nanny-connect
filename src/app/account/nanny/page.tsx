import MainLayout from "@/app/layout/mainLayout";
import NannyProfile from "@/containers/Nanny/Account/page";
import { Box } from "@mui/material";
import React from "react";

function Nannypage() {
  return (
    <MainLayout>
      <NannyProfile />
    </MainLayout>
  );
}

export default Nannypage;
