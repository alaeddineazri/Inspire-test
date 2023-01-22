import { Box, useTheme,  Button, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const AnnoncesCardItem = () => {
    const theme = useTheme();
  return (
    <Box sx={{ display: "flex" , marginTop :"2.19rem" , marginBottom:"1.77rem"}}>
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
            <Typography variant="cardCandidateNumber"> 120 </Typography>
            <Typography variant="cardAnnoncesSubtitle">En ligne</Typography>
        </Box> 
        <Button 
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "primary",
          color: theme.palette.white.main,
          marginLeft: "3.4rem",
            borderRadius: "0.34rem",
        }}
        >
            <NavigateNextIcon fontSize="large"/>
        </Button>
    </Box>
  )
}

export default AnnoncesCardItem