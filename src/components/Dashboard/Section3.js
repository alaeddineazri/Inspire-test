import { Grid } from "@mui/material";
import MabaseCVCard from "./MabaseCVCard";
import NotificationsCard from "./NotificationsCard";


const Section3 = () => {
  return (
    <Grid sx={{marginTop: "0.3rem"}} container spacing={4}>
  <Grid item xs={12} sm={5} md={5}>
    <NotificationsCard/>
  </Grid>
  <Grid item xs={12} sm={7} md={7} >
    <MabaseCVCard/>
  </Grid>
</Grid>
  )
}

export default Section3