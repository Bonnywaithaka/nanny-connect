import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function BellDIIcon({ ...props }) {
  return (
    <SvgIcon
      sx={{
        fill: "none",
        width: "101px",
        height: "45px",
        viewBox: "0 0 101px 45px",
      }}
      viewBox="0 0 101 45"
      {...props}
    >
      <path
        d="M16 15.502C16 13.9107 15.3679 12.3845 14.2426 11.2593C13.1174 10.1341 11.5913 9.50195 10 9.50195C8.4087 9.50195 6.88258 10.1341 5.75736 11.2593C4.63214 12.3845 4 13.9107 4 15.502C4 22.502 1 24.502 1 24.502H19C19 24.502 16 22.502 16 15.502Z"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.73 28.502C11.5542 28.805 11.3019 29.0566 10.9982 29.2315C10.6946 29.4064 10.3504 29.4984 10 29.4984C9.64964 29.4984 9.30541 29.4064 9.00179 29.2315C8.69818 29.0566 8.44583 28.805 8.27002 28.502"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="14.5"
        cy="8.00195"
        r="6.5"
        fill="#4E9BB9"
        stroke="white"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}

export default BellDIIcon;
