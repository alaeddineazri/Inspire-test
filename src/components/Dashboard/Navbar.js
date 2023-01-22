import { Button, Typography, Grid  } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Navbar = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" direction={{xs:"column" , sm:"row"}} pt={3} >
      <Grid item  >
        <Typography variant="NavbarTitle"> Dashboard </Typography>
      </Grid>
      <Grid item>
        <Button
          startIcon={<ControlPointIcon color="white" />}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 28,
            textTransform: "none",
            padding: "11px 24px ",
          }}
        >
          
          <Typography variant="buttonText">Publier une annonce</Typography>
          
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
