import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import cardmedia from "../../../../public/images/card/cardMedia.svg";
import NannyTabContainer from "./tabs/NannyTabContainer";

const skills = [
  {
    id: "1",
    name: "Driving",
  },
  {
    id: "2",
    name: "First Aid",
  },
  {
    id: "3",
    name: "Cooking",
  },
  {
    id: "4",
    name: "Catering",
  },
];

function NannyProfile() {
  return (
    <Box>
      <Box>
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${cardmedia})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "385px",
              width:"500px"
            }}
          />
          <Image src={cardmedia} alt="" width={200} height={500} />
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={5} margin="10px">
          <Box
            sx={{
              backgroundColor: "blue",
              padding: "10px",
              color: "#fff",
              width: "100px",
              borderRadius: "5px",
            }}
          >
            Premium
          </Box>
          <Box>
            <Typography variant="h3" lineHeight={4}>
              Catherine Mwangi
            </Typography>
            <Typography variant="h4">Nairobi, Kenya</Typography>
          </Box>
          <Box display="flex">
            <Box
              sx={{
                border: "1px solid grey",
                padding: "10px 100px",
                borderRadius: "10px",
                margin: "10px 10px 10px 0px",
              }}
            >
              Message
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                padding: "10px 100px",
                backgroundColor: "green",
                color: "#fff",
                borderRadius: "10px",
                margin: "10px",
              }}
            >
              Share Profile
            </Box>
          </Box>
          <Box
            sx={{
              border: "3px solid grey",
              minHeight: "400px",
              borderRadius: "20px",
              margin: "20px 20px 20px 0px",
              padding: "0px 30px",
            }}
          >
            <Typography variant="h3" lineHeight={5}>
              Skills
            </Typography>
            <Box display="flex">
              {skills.map((skill) => (
                <Box
                  key={skill.id}
                  sx={{
                    border: "3px solid grey",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100px",
                    margin: "5px",
                  }}
                >
                  {skill.name}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <NannyTabContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NannyProfile;
