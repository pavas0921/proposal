import { Box, Chip, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Divider } from "antd";
import React from "react";
import styles from "./antecedents.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    "&:last-child": {
      width: "190px", // Ajusta el ancho de la columna "Opción" según tus necesidades
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(nivel, descripcion, definicion) {
  return { nivel, descripcion, definicion };
}

const rows = [
  createData(
    1,
    "No es posible la sedestación",
    "No puede ser colocado ni sostenido por una persona en sedestación"
  ),
  createData(
    2,
    "Necesita soporte desde la cabeza hacia abajo",
    "Requiere soporte en la cabeza, el tronco y la pelvis, para mantener la sedestación"
  ),
  createData(
    3,
    "Necesita soporte desde los hombros y tronco hacia abajo",
    "Requiere soporte en el tronco y la pelvis para mantener la sedestación"
  ),
  createData(
    4,
    "Necesita soporte en la pelvis",
    "Solo requiere soporte en la pelvis"
  ),
];

const ValoracionColumna = () => {
  return (
    <Box>
      <Box className={styles.box_card}>
        <Box className={styles.box_chip}>
          <Chip
            sx={{
              fontSize: "17px",
              backgroundColor: "#3f51b5",
              color: "white",
              marginTop: 2,
            }}
            label="VALORACION DE LA COLUMNA VERTEBRAL"
          />
        </Box>
        <Box className={styles.box_divider}>
          <Divider />
          <Typography variant="h6">ESCOLIOSIS</Typography>
        </Box>
        <Box className={styles.box_valoracionColumna}>
          <Box className={styles.box_valoracionLado}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Derecho</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Torácia"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Lumbar"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={styles.box_valoracionLado}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Izquierdo
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Torácia"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Lumbar"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={styles.box_valoracionLado}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Ninguno</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Torácia"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Lumbar"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "70%", display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-multiline-static"
            label="Otros"
            multiline
            rows={2}
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>

      <Box className={styles.box_card}>
        <Box className={styles.box_chip}>
          <Chip
            sx={{
              fontSize: "17px",
              backgroundColor: "#3f51b5",
              color: "white",
              marginTop: 2,
            }}
            label="VALORACION DE LA SEDESTACION (escala del nivel de sedestación)"
          />
        </Box>
        <Box className={styles.box_divider}>
          <Divider />
          <Typography variant="h6">
            Cantidad de soporte requerido para mantener la sedestación. (escala
            del nivel de sedestación)
          </Typography>
        </Box>
        <Box sx={{ width: "90%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nivel</StyledTableCell>
                  <StyledTableCell align="center">Descripcion</StyledTableCell>
                  <StyledTableCell align="center">Definición</StyledTableCell>
                  <StyledTableCell align="center">Opción</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.nivel}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.descripcion}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.definicion}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                          >
                            <FormControlLabel
                              value="bottom"
                              control={<Radio />}
                              label="Sí"
                              labelPlacement="bottom"
                            />
                            <FormControlLabel
                              value="bottom"
                              control={<Radio />}
                              label="No"
                              labelPlacement="bottom"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ValoracionColumna;
