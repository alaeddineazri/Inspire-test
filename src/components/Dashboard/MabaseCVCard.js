import { Box, useTheme, Grid, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MabaseCVCardItem from "./MabaseCVCardItem";

const MabaseCVCard = () => {
    const theme = useTheme();
  return (
    <Box sx={{
        height: "100%",
        backgroundColor: theme.palette.white.main,
        padding: "1.64rem 1.57rem",
        borderRadius: "0.41rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="cardTitle">Ma base CV</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="StatistiquesDate">Mois </Typography>
          <KeyboardArrowDownIcon color="primary" />
        </Box>
      </Box>
        <Box sx={{ marginTop: "1.75rem" }}>
        <MabaseCVCardItem/>
        </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "0.34rem",
            textTransform: "none",
            padding: "0.7rem 1.5rem  ",
            
          }}
        >
          <Typography variant="buttonText">Trouver un profil</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default MabaseCVCard