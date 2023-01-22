import { Box, useTheme, Grid, Button, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";


const CandidateCardItem = ({value,label}) => {
    const theme = useTheme();


  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginTop: "1.98rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.lightBlue.main,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "2.4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GroupOutlinedIcon color="primary" fontSize="large" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="cardCandidateNumber"> {value} </Typography>
          <Typography variant="cardCandidateSubtitle">{label}</Typography>
          <Button
          variant="contained"
          sx={{
            backgroundColor: "primary",
            color: theme.palette.white.main,
            width: "187px",
            borderRadius: "0.34rem",
            float: "right",
            marginTop: "2.6rem",
          }}
        >
          <Typography variant="cardCandidateButton">
            Voir les candidatures
          </Typography>
        </Button>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </Grid>
  );
};

export default CandidateCardItem;
