import { Box, useTheme, Typography, Button } from "@mui/material";
import NotificationsCardItem from "./NotificationsCardItem";

const NotificationsCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.white.main,
        padding: "1.64rem 1.57rem",
        borderRadius: "0.41rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="cardTitle">Notifications</Typography>
      </Box>
      <Box sx={{ marginTop: "1.85rem" }}>
        <NotificationsCardItem />
        <NotificationsCardItem />
        <NotificationsCardItem />
        <NotificationsCardItem />
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
          <Typography variant="buttonText">Voir les notifications</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationsCard;
