import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import AvatarImageCropper from "./AvatarImageCropper";

function ProfilePhotoCrop({ uploadAvatar }) {
  const triggerAvatarUpload = (file) => {
    let fileExtension = file.name.split(".").pop();
    let fileName = file.name;
    const fileTypeExtension = file.type.split("/").pop();
    if (fileExtension !== fileTypeExtension) {
      fileExtension = fileTypeExtension;
      fileName = `${fileName.split(".").shift()}.${fileTypeExtension}`;
    }
    uploadAvatar({
      fileName,
      fileData: file,
      fileExtension,
      contentType: fileExtension.type,
    });
  };
  return (
    <Box>
      <Box
        sx={(theme) => ({
          width: 270,
          height: 270,
          margin: "auto",
          border: "1px solid black",
          backgroundColor: "#fff",
          [theme.breakpoints.down("md")]: {
            width: 202,
            height: 202,
          },
        })}
      >
        <AvatarImageCropper apply={triggerAvatarUpload} />
      </Box>
    </Box>
  );
}

ProfilePhotoCrop.propTypes = {
  uploadAvatar: PropTypes.func.isRequired,
  uploadedImage: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    fileData: PropTypes.instanceOf(typeof window !== "undefined" && window.File)
      .isRequired,
    fileExtension: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
  }),
};

export default ProfilePhotoCrop;
