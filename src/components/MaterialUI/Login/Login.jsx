import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import Loader from "../Loader";
import LoginImg from "../../../assets/login.png";
import styles from "./login.module.css";
import { ResponsiveAppBar } from "../ResponsiveAppBar";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <Box className={styles.div_main}>
      <Box className={styles.box_login}>
        <Box className={styles.box_image}>
          <CardMedia
            component="img"
            className={styles.image}
            image={LoginImg}
            alt=""
          />
        </Box>
        <Box className={styles.box_inputs}>
          <TextField
            id="outlined-basic"
            label="Nombre de usuario"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            sx={{ marginTop: 2 }}
          />
        </Box>
        <Box className={styles.box_button}>
          <Button variant="contained" onClick={handleClick}>
            Iniciar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
