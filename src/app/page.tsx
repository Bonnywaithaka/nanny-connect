// @ts-nocheck

"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import useMediaQuery from "@mui/material/useMediaQuery";
import LandingPage from "@/components/LandingPage";
import GuestWrapper from "../components/pages/GuestWrapper";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import GetCountriesQuery from "../api/graphqlQueries/GetCountries";
import ListShimmers from "../components/shimmers/ListShimmers";
import CountriesListItem from "../containers/homeComponents/CountriesListItem";
import CountrySearchTextField from "../components/CountrySearchTextField";
import HomeDesktop from "../components/pages/desktop/HomeDesktop";
import HomeMobile from "../components/pages/mobile/HomeMobile";

export default function Home() {
  const [searchParam, setSearchParam] = React.useState("");
  const [dialogDetails, setDialogDetails] = React.useState({
    open: false,
    country: "",
  });
  const mobileMatches = useMediaQuery("(max-width:1024px)");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };
  const selectOption = (value: string) => {
    setDialogDetails({ open: true, country: value });
  };
  const closeDialog = () => {
    setDialogDetails({ open: false, country: "" });
  };
  const { open, country } = dialogDetails;
  return (
    <GuestWrapper>
      <LandingPage />
    </GuestWrapper>
  );
}
