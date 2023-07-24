import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 3 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
