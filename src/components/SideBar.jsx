import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import {
  Home,
  SettingsSuggest,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

function SideBar() {
  const s = <Home></Home>;

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#seting">
              <ListItemIcon>
                <SettingsSuggest></SettingsSuggest>
              </ListItemIcon>
              <ListItemText primary="Setting"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>{s}</ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <DarkMode></DarkMode>
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
