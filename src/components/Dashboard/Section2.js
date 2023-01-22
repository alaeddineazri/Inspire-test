import { Grid } from "@mui/material";
import AnnoncesCard from "./AnnoncesCard";
import MultipostingCard from "./MultipostingCard";
import StatistiquesCard from "./StatistiquesCard";


const Section2 = () => {
  return (
    <Grid container spacing={4}>
  <Grid item xs={12} sm={5} md={3}>
    <AnnoncesCard/>
  </Grid>
  <Grid item xs={12} sm={7} md={4} >
  <MultipostingCard/>
  </Grid>
  <Grid item xs={12} sm={12} md={5}>
  <StatistiquesCard/>
  </Grid>
</Grid>
  );
};

export default Section2;
