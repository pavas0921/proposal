import { Box, TextField, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Divider } from "antd";
import React from "react";
import styles from "./antecedents.module.css";

const ConsideracionesPostulares = () => {
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
            label="INCLINACION LATERAL DE LA CABEZA"
          />
        </Box>
        <Box className={styles.box_divider}>
          <Divider />
          <Typography>
            Desviación angular de la línea que une el borde externo externo de
            los ojos con relación a la horizontal.
          </Typography>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_head_card}>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;30°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/inclin_cab7.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
          </Box>
          <Box className={styles.box_helpers}>
            <Box className={styles.box_left}>
              <Chip
                sx={{
                  fontSize: "13px",
                  backgroundColor: "#3f51b5",
                  color: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
                label="Inclinación lateral a la izquierda"
              />
            </Box>
            <Box className={styles.box_right}>
              <Chip
                sx={{
                  fontSize: "13px",
                  backgroundColor: "#3f51b5",
                  color: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
                label="Inclinación lateral a la derecha"
              />
            </Box>
          </Box>
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
            label="INCLINACION ANTERIOR Y POSTERIOR DE LA CABEZA"
          />
        </Box>
        <Box className={styles.box_divider}>
          <Divider />
          <Typography>
            Desviación angular de la línea que une el borde externo del ojo con
            el trago de la oreja con relación a la horizontal.
          </Typography>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_head_card}>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;16°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat1.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Moderado</Typography>
              <Typography variant="p">1° -15°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat2.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Leve</Typography>
              <Typography variant="p">14° - 0°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat2.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Normal</Typography>
              <Typography variant="p">15° - 24°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat4.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Leve</Typography>
              <Typography variant="p">25° - 39°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat5.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Moderado</Typography>
              <Typography variant="p">40° - 54°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat6.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
            <Box className={styles.box_head}>
              <Typography variant="p">Severo</Typography>
              <Typography variant="p">&ge;16°</Typography>
              <img src="https://historyclinical.com/webroot/intherapy/images/incl_lat7.png" />
              <TextField
                label="Desviación"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="number"
                sx={{ width: "80%", marginTop: 1, marginBottom: 1 }}
              />
            </Box>
          </Box>
          <Box className={styles.box_helpers}>
            <Box className={styles.box_left}>
              <Chip
                sx={{
                  fontSize: "13px",
                  backgroundColor: "#3f51b5",
                  color: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
                label="Inclinación lanterior"
              />
            </Box>
            <Box className={styles.box_right}>
              <Chip
                sx={{
                  fontSize: "13px",
                  backgroundColor: "#3f51b5",
                  color: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
                label="Inclinación posterior"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsideracionesPostulares;
