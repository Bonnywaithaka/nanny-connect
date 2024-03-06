import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { tabsArrayProps } from "@/containers/Nanny/Account/tabs/NannyTabsArray";

interface tabsProps {
  value: string;
  items?: tabsArrayProps[];
}

function CustomTabPanel({ items, ...props }: tabsProps) {
  const { value, ...other } = props;
  const selectedTab = items?.find((tabs) => tabs.value === value);

  return (
    <div
      role="tabpanel"
      hidden={!selectedTab}
      id={`simple-tabpanel-${selectedTab}`}
      aria-labelledby={`simple-tab-${selectedTab}`}
      {...other}
    >
      {selectedTab && (
        <Box
          sx={{
            p: 3,
            minHeight: "80vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {selectedTab.value === "" && (
            <Grid
              container
              width="100%"
              justifyContent="end"
              height="inherit"
              alignItems="center"
            >
              <Button
                sx={{
                  color: "primary",
                  textTransform: "capitalize",
                  py: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  fontWeight: 400,
                  fontSize: "18px",
                }}
                onClick={() => {
                  alert("clicked tab");
                }}
              >
                {/* <BulbIcon fontSize="large" /> */}
              </Button>
            </Grid>
          )}
          <Box>{selectedTab?.component}</Box>
        </Box>
      )}
    </div>
  );
}
export default CustomTabPanel;
