import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { TableMaterial } from "../TableMaterial";
import styles from "./appbar.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Título de la página
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            Botón 1
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Submenú 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Submenú 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Submenú 3</MenuItem>
          </Menu>
          <Button color="inherit" onClick={handleMenuClick}>
            Botón 2
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Submenú A</MenuItem>
            <MenuItem onClick={handleMenuClose}>Submenú B</MenuItem>
            <MenuItem onClick={handleMenuClose}>Submenú C</MenuItem>
          </Menu>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Box className={styles.box_table}>
        <TableMaterial />
      </Box>

      <Box
        sx={{ width: "80%", display: "flex", justifyContent: "space-around" }}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Box>

      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: 5,
        }}
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Box>
    </Box>
  );
};

export default ResponsiveAppBar;
