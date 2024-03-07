import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormGroup,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KycForm from ".";
import ProfilePhotoCrop from "@/components/reactAvatarImageCropper/ProfilePhotoCrop";
import Dialog from "../../components/Dialog";
import { Edit } from "@mui/icons-material";
import { loadingStatus } from "@/apolloConfigs/ReactiveVariables";
import profilePic from "../../../public/images/profile/image.png";
import IDPhotoVerification from "./IDPhotoVerification";
import Image from "next/image";

function FormGroupPage({ step }) {
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
      <FormGroup sx={{ display: step === 0 ? "" : "none" }}>
        <Box sx={{ margin: "50px" }}>
          <Typography color="primary" lineHeight={3}>* Please use your actual picture we need it for identity verification.</Typography>
          <Typography variant="h3">Profile Picture</Typography>
          <Card
            sx={{
              width: "180px",
              height: "200px",
              margin: "40px 20px 30px 0px",
              border: "2px solid #f9f9f9",
              position:"relative",
              borderRadius:"30px"
            }}
          >
           <Image src={profilePic} alt="logo" fill objectFit="cover" />
            <CardActionArea
              sx={{
                position: "absolute",
                left: "60%",
                top: "2%",
                width: "40px",
              }}
            >
              <IconButton
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#fff",
                }}
              >
                <Edit />
              </IconButton>
            </CardActionArea>
          </Card>
          <KycForm />
        </Box>
      </FormGroup>
      <FormGroup sx={{ display: step === 1 ? "" : "none" }}>
        <IDPhotoVerification />
      </FormGroup>
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

export default FormGroupPage;
