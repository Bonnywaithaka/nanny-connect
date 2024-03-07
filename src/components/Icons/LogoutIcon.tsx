import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function LogoutIcon({ ...props }) {
  return (
    <SvgIcon
      sx={{
        fill: "none",
      }}
      width="23"
      height="20"
      viewBox="0 0 23 20"
      {...props}
    >
      <path
        d="M14 1.71637L18 1.71637C18.5304 1.71637 19.0391 1.91022 19.4142 2.25529C19.7893 2.60036 20 3.06837 20 3.55637L20 16.4364C20 16.9244 19.7893 17.3924 19.4142 17.7374C19.0391 18.0825 18.5304 18.2764 18 18.2764L14 18.2764"
        stroke="#666666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.39668L2 9.99668L7 14.5967"
        stroke="#666666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.0029L14 10.0029"
        stroke="#666666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default LogoutIcon;
