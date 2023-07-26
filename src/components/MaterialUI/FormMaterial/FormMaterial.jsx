import FileUploadIcon from "@mui/icons-material/FileUpload";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  ConsideracionesPostulares,
  ValoracionColumna,
} from "../AntecedentsDescription";
import AntecedentsDescription from "../AntecedentsDescription/AntecedentsDescription";
import styles from "./form.module.css";
const FormMaterial = () => {
  return (
    <Box className={styles.box_main}>
      <Box className={styles.card_form}>
        <Box className={styles.box_title}>
          <Typography variant="h2">Santiago Candela Lora</Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <AntecedentsDescription />
        </Box>
        <Box sx={{ width: "100%" }}>
          <ConsideracionesPostulares />
        </Box>
        <Box sx={{ width: "100%" }}>
          <ValoracionColumna />
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Guardar
            </Button>
            <Button
              variant="contained"
              endIcon={<PrintIcon />}
              sx={{ backgroundColor: "#2a3f54" }}
            >
              Imprimir
            </Button>
            <Button
              variant="contained"
              endIcon={<FileUploadIcon />}
              sx={{ backgroundColor: "green" }}
            >
              Recuperar Formulario
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default FormMaterial;
