import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function ProfileIcon({ ...props }) {
  return (
    <SvgIcon
      sx={{
        fill: "none",
      }}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      {...props}
    >
      <g clipPath="url(#clip0_7479_340067)">
        <path
          d="M20.8695 17.6088V15.6523C20.8695 14.6145 20.4297 13.6192 19.647 12.8854C18.8642 12.1515 17.8026 11.7393 16.6956 11.7393H8.34774C7.24075 11.7393 6.1791 12.1515 5.39634 12.8854C4.61358 13.6192 4.17383 14.6145 4.17383 15.6523V17.6088"
          stroke="#666666"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5216 8.8046C14.8268 8.8046 16.6955 7.05267 16.6955 4.89156C16.6955 2.73044 14.8268 0.978516 12.5216 0.978516C10.2164 0.978516 8.34766 2.73044 8.34766 4.89156C8.34766 7.05267 10.2164 8.8046 12.5216 8.8046Z"
          stroke="#666666"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7479_340067">
          <rect width="24" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default ProfileIcon;
