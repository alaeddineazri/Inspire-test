
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
        display: false,
        stepSize: 1,
      },}

  },
};

const StatistiquesCardItem = () => {
  
  const data = {
    labels: ['8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12'],
    datasets : [
      {
        // barPercentage: 0.5,
        barThickness: 18,
        barRoundness : 1,
        minBarLength: 2,
        data: [1, 4, 1, 2, 0 , 4 , 1],
        backgroundColor: '#28DAC6',
        borderColor: '#28DAC6',
        hoverBackgroundColor: '#28DAC6',
        hoverBorderColor: '#28DAC6',
        borderRadius: 50,
        
      },
    ]
  }
  return (
    <div><Bar  data={data} options={options}  /></div>
  )
}

export default StatistiquesCardItem






