
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);

const options = {
  plugins:{
    legend: {
     display: false
    }
   },
   scales: {
    
    y: {
      ticks: {
        display: true,
        stepSize: 50,
      },}

  },
};

const MabaseCVCardItem = () => {
  
  const data = {
    labels: ['30/3', '01/4', '02/4' , '03/4', '04/4', '05/4', '06/4', '07/4' , '08/4' , '09/4' , '10/4' , '11/4' ],
    datasets : [
      {
        barThickness: 18,
        barRoundness : 1,
        minBarLength: 2,
        data: [50, 20, 150, 300,120 , 20 , 150,200,400,320,70,130],
        backgroundColor: '#5096F4',
        borderColor: '#5096F4',
        hoverBackgroundColor: '#5096F4',
        hoverBorderColor: '#5096F4',
        
      },
    ]
  }
  return (
    <Box>
    <Typography variant="cardNotificationsSubtitle" >
    Total des nouveaux profils :  3616
    </Typography >
    <Box sx={{marginTop:"2.5rem" , marginBottom:"1.5rem" }}>
    <Line  data={data} options={options}  />
    </Box>
    </Box>
  )
}

export default MabaseCVCardItem




