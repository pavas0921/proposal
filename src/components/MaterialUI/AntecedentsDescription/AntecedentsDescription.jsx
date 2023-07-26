import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import styles from "./antecedents.module.css";

const AntecedentsDescription = () => {
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
            label="ANTECEDENTES GENERALES"
          />
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Antecedentes Familiares"
              multiline
              rows={2}
              placeholder="Escribe tu texto aquí"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Etapa Prenatal"
              multiline
              rows={2}
              placeholder="Escribe tu texto aquí"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Etapa Perinatal"
              multiline
              rows={2}
              placeholder="Escribe tu texto aquí"
              variant="outlined"
              sx={{ width: "90%", marginBottom: 1 }}
            />
          </Box>
        </Box>
      </Box>

      {/* CONDICIONES DE SALUD - PROBLEMAS DE SALUD
       */}

      <Box className={styles.box_card}>
        <Box className={styles.box_chip}>
          <Chip
            sx={{
              fontSize: "17px",
              backgroundColor: "#3f51b5",
              color: "white",
              marginTop: 2,
            }}
            label="CONDICIONES DE SALUD - PROBLEMAS DE SALUD
            "
          />
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Neurologico"
              multiline
              rows={2}
              placeholder="Sí/No Cuál/Tratamiento"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Ortopédico"
              multiline
              rows={2}
              placeholder="Sí/No Cuál/Tratamiento"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Cardiaco"
              multiline
              rows={2}
              placeholder="Sí/No Cuál/Tratamiento"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Cirugías"
              multiline
              rows={2}
              placeholder="Sí/No Cuál/Tratamiento"
              variant="outlined"
              sx={{ width: "90%", marginBottom: 1 }}
            />
          </Box>
        </Box>
      </Box>

      {/* PROCESAMIENTO SENSORIAL */}

      <Box className={styles.box_card}>
        <Box className={styles.box_chip}>
          <Chip
            sx={{
              fontSize: "17px",
              backgroundColor: "#3f51b5",
              color: "white",
              marginTop: 2,
            }}
            label="PROCESAMIENTO SENSORIAL"
          />
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Tipo de respuesta"
              multiline
              rows={2}
              placeholder="Tipo de respuesta"
              variant="outlined"
              helperText="Integración Sensorial/Táctil"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Tipo de respuesta"
              multiline
              rows={2}
              placeholder="Tipo de respuesta"
              variant="outlined"
              helperText="Integración Sensorial/Propioceptiva"
              sx={{ width: "90%" }}
            />
          </Box>
        </Box>

        <Box className={styles.box_form}>
          <Box className={styles.box_text}>
            <TextField
              id="outlined-multiline-static"
              label="Tipo de respuesta"
              multiline
              rows={2}
              placeholder="Tipo de respuesta"
              variant="outlined"
              helperText="Integración Sensorial/Vestibular"
              sx={{ width: "90%", marginBottom: 1 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AntecedentsDescription;
