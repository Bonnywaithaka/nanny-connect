import React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Box from "@mui/material/Box";

interface ProfileMenuProps {
  title: React.ReactNode;
  menuChild?: React.ReactNode;
}
const MenuComponent = React.forwardRef(
  ({ title, menuChild }: ProfileMenuProps, ref) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box ref={ref}>
        <div>
          <IconButton
            aria-label="more"
            id="profile-button"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: theme.palette.common.white,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {title}
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>

          {menuChild && (
            <Menu
              id="profile-menu"
              MenuListProps={{
                "aria-labelledby": "profile-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                p: "9px 12px",
              }}
            >
              {menuChild}
            </Menu>
          )}
        </div>
      </Box>
    );
  },
);
export default MenuComponent;
