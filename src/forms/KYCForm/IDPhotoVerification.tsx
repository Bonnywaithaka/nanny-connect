import ProfilePhotoCrop from "@/components/reactAvatarImageCropper/ProfilePhotoCrop";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Dialog from "../../components/Dialog";
import profilePic from "../../../public/images/profile/image.png";
import frontId from "../../../public/images/Id/Id front.jpg";
import backId from "../../../public/images/Id/Backid.png";
import { loadingStatus } from "@/apolloConfigs/ReactiveVariables";
import Image from "next/image";

export function CardImage({ handleOpen, title, img }) {
  return (
    <>
      <Box>
        <Typography variant="h2" fontSize={26}>{title}</Typography>
      </Box>
      <Card
        sx={{
          margin: "40px 20px 30px 0px",
          border: "2px solid #f9f9f9",
          height: "300px",
          width:"50%",
        }}
      >
        {/* <CardMedia
          component="img"
          height="300px"
          image={img}
          alt="Profile"
        /> */}
         <Image src={img} alt="logo" width={450} height={300} />
      </Card>
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Upload Photo
        </Button>
      </Box>
    </>
  );
}

function IDPhotoVerification() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState();
  console.log("profile", profile);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const uploadTheFile = (fileData, fieldName) => {
    loadingStatus(true);
    setProfile(fileData);
  };
  const handleUploadAvatar = ({ fileData }) => {
    uploadTheFile(fileData, "logoID");

    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onloadend = () => {
      //   setFieldValue("countyLogo", reader.result);
      handleClose();
    };
  };
  return (
    <Box>
      <Box>
        <Grid
          container
          spacing={3}
          sx={{
            padding: "50px",
          }}
        >
          <Grid item md={6}>
            <CardImage handleOpen={handleOpen} title="FRONT OF ID" img={frontId}/>
          </Grid>
          <Grid item md={6}>
            <CardImage handleOpen={handleOpen} title="BACK OF ID" img={backId}/>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={open}
        maxWidth="xs"
        fullWidth
        modalContent={
          <ProfilePhotoCrop
            uploadAvatar={handleUploadAvatar}
            //   imageSrc={imageSrc}
          />
        }
        handleClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflowY: "unset",
          },
          "& .MuiDialogContent-root": {
            overflowY: "unset",
          },
        }}
      />
    </Box>
  );
}

export default IDPhotoVerification;
