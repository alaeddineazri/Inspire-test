import { Box, useTheme, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StatistiquesCardItem from "./StatistiquesCardItem";

const StatistiquesCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.white.main,
        padding: "1.64rem 1.57rem",
        borderRadius: "0.41rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="cardTitle">Statistiques</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="StatistiquesDate">Semaine </Typography>
          <KeyboardArrowDownIcon color="primary" />
        </Box>
      </Box>
      <Box sx={{ marginTop: "1.75rem" }}>
        <StatistiquesCardItem />
      </Box>
      <Box sx={{ marginTop: "3.2rem", paddingLeft: "2.32rem" }}>
        <Grid container>
          <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={6}>
            <Typography variant="cardStatistiquesNumber">5</Typography>
            <Typography variant="cardCandidateSubtitle">
              Candidats en mission
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={6}>
            <Typography variant="cardCandidateNumber">34</Typography>
            <Typography variant="cardCandidateSubtitle">
              Candidats partagés
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={6}>
            <Typography variant="cardCandidateNumber">12</Typography>
            <Typography variant="cardCandidateSubtitle">
              Commandes en ligne
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={6}>
            <Typography variant="cardCandidateNumber">4</Typography>
            <Typography variant="cardCandidateSubtitle">
              Annonces en ligne
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StatistiquesCard;
