import { Box, useTheme, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const NotificationsCardItem = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", flexDirection:"column"}}>
        <Box
          sx={{
            backgroundColor: theme.palette.lightBlue.main,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "2.4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiberManualRecordRoundedIcon color="primary" fontSize="large" />
        </Box>
        <Box sx={{ borderRight: "2px solid #EBE9F1", height: "100%" ,width:"25%"}}>
          
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" , marginBottom:" 0.2rem" }}>
          <Typography variant="cardNotificationsTitle">
            Documents à signer pour M.Philippot
          </Typography>
          <Typography variant="MultipostingSubInfo">28/03</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" , marginBottom:" 0.2rem" }}>
          <Box sx={{display:"flex" , flexDirection:"column" , marginBottom:" 0.2rem"}}>
          <Typography variant="cardNotificationsSubtitle">
            Test Genève
          </Typography>
          <Typography variant="cardNotificationsSubtitle">
          Contrat de travail.pdf
          </Typography>
          </Box>
          <ArrowCircleRightOutlinedIcon fontSize="large" color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationsCardItem;
