import { Box, useTheme, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'

import React , {useEffect} from "react";
import CandidateCardItem from "./CandidateCardItem";
import { getAllCandidates } from "../../redux/action/CandidatsAction";

const CandidateCard = () => {



  const { Candidatures, NouveauxProfils, DossiersInt√©ressants, DossiersFavoris } = useSelector(state => state.Candidats);


    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getAllCandidates())
  },[])

  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 1,
        backgroundColor: theme.palette.white.main,
        padding: "1.64rem 1.57rem",
        marginTop: "2.8rem",
        marginBottom: "1.3rem",
        borderRadius: "0.41rem",
        
      }}
    >
      <Typography variant="cardTitle">Candidats</Typography>
      <Grid container >
        <CandidateCardItem value={Candidatures.value} label={Candidatures.label}/>
        <CandidateCardItem value={NouveauxProfils.value} label={NouveauxProfils.label}/>
        <CandidateCardItem value={DossiersInt√©ressants.value} label={DossiersInt√©ressants.label}/>
        <CandidateCardItem value={DossiersFavoris.value} label={DossiersFavoris.label}/>
      </Grid>
    </Box>
  );
};

export default CandidateCard;
