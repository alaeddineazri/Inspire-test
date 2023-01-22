import { Box, useTheme, Typography } from "@mui/material";
import AnnoncesCardItem from "./AnnoncesCardItem";

const AnnoncesCard = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        height: 1,
        backgroundColor: theme.palette.white.main,
        padding: "1.64rem 1.57rem",
        borderRadius: "0.41rem",
        
        
      }}
    >   
        <Typography variant="cardTitle">Annonces</Typography>
        <AnnoncesCardItem/>
        <AnnoncesCardItem/>
        <AnnoncesCardItem/>
        <AnnoncesCardItem/>
        <AnnoncesCardItem/>
    </Box>
  )
}

export default AnnoncesCard