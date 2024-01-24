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
      <Dialog
        open={open}
        maxWidth="xs"
        modalContent={
          <div className="center">
            <Typography variant="body1">
              You have selected <strong>{country}</strong>.
            </Typography>
            <Box mt={1}>
              <Button variant="contained" color="primary" onClick={closeDialog}>
                Close
              </Button>
            </Box>
          </div>
        }
        handleClose={closeDialog}
      />
      <div>
        <Grid container spacing={2} sx={{ height: "85vh" }}>
          <Grid item xs={12}>
            {!mobileMatches ? <HomeDesktop /> : <HomeMobile />}
          </Grid>
          <Grid item lg={3} xl={3} />
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: 35,
              }}
            >
              Welcome to{" "}
              <Link href="https://nextjs.org" target="_blank">
                Next.js!
              </Link>
            </Typography>
            <Box mt={1}>
              <Typography variant="body1">
                Get started by editing <code>pages/index.js</code>
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} xl={3} />
          <Grid item lg={3} xl={3} />
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <Card style={{ width: "100%" }}>
              <CardHeader
                title="Countries"
                sx={{
                  "& span": {
                    fontSize: 20,
                  },
                }}
              />
              <CardContent>
                <CountrySearchTextField handleChange={handleChange} />
                <Box
                  sx={{
                    maxHeight: 300,
                    overflow: "scroll",
                  }}
                >
                  <GetCountriesQuery
                    variables={{ param: searchParam }}
                    loader={<ListShimmers />}
                  >
                    {({ getCountries }) => (
                      <div>
                        {getCountries.length > 0 ? (
                          <List>
                            {getCountries.map((item) => (
                              <CountriesListItem
                                key={item.country}
                                item={item}
                                selectOption={selectOption}
                              />
                            ))}
                          </List>
                        ) : (
                          <Alert severity="warning">
                            Sorry we do not have any countries
                          </Alert>
                        )}
                      </div>
                    )}
                  </GetCountriesQuery>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} xl={3} />
        </Grid>
      </div>
    </GuestWrapper>
  );
}
