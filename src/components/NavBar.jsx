import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Abc, Email, Favorite } from "@mui/icons-material";

const StledToolBAr = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

function NavBar() {
  //========= popup menu =============
  const [popupMenu, setPopupMenu] = React.useState(false);
  const openPopup = Boolean(popupMenu);

  const handleClick = (e) => {
    setPopupMenu(e.currentTarget);
  };

  const handleClose = () => {
    setPopupMenu(false);
  };

  return (
        <AppBar position="sticky">
          <StledToolBAr>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              LOGO
            </Typography>
            <Abc sx={{ display: { xs: "block", sm: "none" } }}></Abc>

            <SearchBar>
              <InputBase placeholder="Search here.." />
            </SearchBar>

            <Icons>
              <Badge
                sx={{ display: { xs: "none", sm: "block" } }}
                badgeContent={4}
                color="secondary"
              >
                <Email></Email>
              </Badge>
              <Badge
                sx={{ display: { xs: "none", sm: "block" } }}
                badgeContent={3}
                color="secondary"
              >
                <Favorite></Favorite>
              </Badge>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                id="positioned-button"
                aria-controls={openPopup ? "positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openPopup ? "true" : undefined}
                onClick={handleClick}
              />
            </Icons>

            <Menu
              id="positioned-menu"
              aria-labelledby="positioned-button"
              open={openPopup}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </StledToolBAr>
        </AppBar>
  );
}

export default NavBar;
