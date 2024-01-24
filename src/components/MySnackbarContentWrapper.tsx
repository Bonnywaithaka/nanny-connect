// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SnackbarContent from "@mui/material/SnackbarContent";

interface SnackBarProps {
  message: string;
  onClose: string;
  children?: React.ReactNode;
}

function MySnackbarContentWrapper(props: SnackBarProps) {
  const theme = useTheme();
  const { message, onClose, ...other } = props;
  return (
    <SnackbarContent
      sx={{
        backgroundColor: "#ffffff",
        padding: "3px 15px",
        flexWrap: "inherit",
      }}
      aria-describedby="client-snackbar"
      message={
        // eslint-disable-next-line
        <Box id="client-snackbar" sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.pxToRem(15),
            }}
          >
            {message}
          </Typography>
        </Box>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
          size="large"
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["danger", "info", "success", "warning", "primary"])
    .isRequired,
};

export default MySnackbarContentWrapper;
