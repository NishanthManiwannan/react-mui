import { Box } from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">Right BAr</Box>
    </Box>
  );
}

export default RightBar;
