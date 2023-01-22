import Navbar from "./Dashboard/Navbar"
import { Container } from "@mui/material"
import CandidateCard from "./Dashboard/CandidateCard"
import Section2 from "./Dashboard/Section2"
import Section3 from "./Dashboard/Section3"


const Dashboard = () => {
  return (
    <Container maxWidth="1230px">
        <Navbar />
        <CandidateCard/>
        <Section2 />
        <Section3 />
    </Container>
  )
}

export default Dashboard