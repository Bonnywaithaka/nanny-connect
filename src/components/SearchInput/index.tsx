import { Search } from "@mui/icons-material";
import { Box, Input, InputLabel } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import React from "react";

interface inputProps {
  icon: JSX.Element;
  text: string;
}
function InputField({ icon, text }: inputProps) {
  return (
    <Box margin="20px 10px 20px 10px" width="100%">
      <Input
        {...Input}
        {...InputLabel}
        sx={{
          border: "1px solid #c8c8c8",
          borderRadius: "100px",
          padding: "10px",
        }}
        name="search"
        startAdornment={icon}
        placeholder={text}
        fullWidth
        disableUnderline
      />
    </Box>
  );
}

export default InputField;
