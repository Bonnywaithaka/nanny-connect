import React from "react";
import { TextField } from "@mui/material";

function StyledTextField({ adornment, ...rest }) {
  return (
    <TextField
      sx={(theme) => ({
        width: "100%",
        marginTop: theme.spacing(1),
        borderRadius: 2,
        ...(adornment && {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderRadius: 2,
          },
        }),
        // ...(otp && {
        //   "& .MuiOutlinedInput-input": {
        //     textAlign: "center",
        //   },
        // }),
      })}
      {...rest}
    />
  );
}

export default StyledTextField;
