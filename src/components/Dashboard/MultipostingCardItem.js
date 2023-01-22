import { Box,  Typography } from "@mui/material";

const MultipostingCardItem = () => {
  return (
    <Box
        sx={{ display: "flex", marginTop: "2.19rem", marginBottom: "1.77rem" , justifyContent:"space-between" , borderBottom:"1px solid #E5E5E5" , paddingBottom:"1.77rem"}}
    >
        <Box sx={{ display: "flex"}}>
      <img
        style={{ width: "52.48px", height: "52.48px", borderRadius: "20%" }}
        src={require("../../assets/image/monster.png")}
        alt="img"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", marginLeft: "2.4rem" }}
      >
        <Typography variant="MultipostingTitle"> Test.com </Typography>
        <Typography variant="MultipostingSubtitle">test.com</Typography>
      </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginLeft: "2.4rem"  }}
      >
        <Typography variant="MultipostingInfo"> 4 annonces </Typography>
        <Typography variant="MultipostingSubInfo">10 annonces</Typography>
      </Box>
    </Box>
  );
};

export default MultipostingCardItem;
