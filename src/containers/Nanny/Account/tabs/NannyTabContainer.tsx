"use client";

import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NannyTabsArray from "./NannyTabsArray";
import CustomTabPanel from "@/components/CustomTabPanel";

function NannyTabContainer() {
  //   const { tab, section } = router.query;
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // router.push({
    //   query: { tab, section: newValue },
    // });
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          justifyContent="space-between"
          sx={{
            borderRadius: "10px",
            minHeight: "60px",
            alignItems: "center",
            paddingX: "20px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            scrollButtons="auto"
            TabIndicatorProps={{
              sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "4px",
                borderRadius: "2px",
              },
            }}
          >
            {NannyTabsArray.map((tabs) => (
              <Tab key={tabs.value} value={tabs.value} label={tabs.label} />
            ))}
          </Tabs>
        </Box>
        {/* <OrganisationIconComponent /> */}
      </Box>

      <CustomTabPanel value={value} items={NannyTabsArray} />
    </Box>
  );
}
export default NannyTabContainer;
