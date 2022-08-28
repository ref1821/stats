import React from 'react'
import {Line} from 'react-chartjs-2'
import {Container} from '@mui/material'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import '../../components/Elements/Graficas.css'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'WCC',
      },
    },
  };

export const Teams_chart = (props) => {
    const data={
        labels:['BAHRAIN',	'JEDDAH',	'AUSTRALIA',	'IMOLA',	'MIAMI',	'SPAIN',	'MONACO',	'BAKU',	'CANADA',	'SILVERSTONE',	'RB RING', 'PAUL RICARD', 'HUNGARORING', 'SPA-FRANCORCHAMPS'],
        
        datasets:[
          {
            label:'Red Bull',
            fill:false,
            data:[0, 37, 55, 113, 151, 195, 235, 279, 304, 328, 359, 396, 431, 475],
            borderColor: '#0c2461',
            backgroundColor: '#0c2461',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Ferrari',
            fill:false,
            data:[44, 78, 104, 124, 157, 169, 199, 199, 228, 265, 303, 314, 334, 357],
            borderColor: '#b71540',
            backgroundColor: '#b71540',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Mercedes',
            fill:false,
            data:[27, 38, 65, 77, 95, 120, 134, 161, 188, 204, 237, 270, 304, 316],
            borderColor: '#718093',
            backgroundColor: '#718093',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Mclaren',
            fill:false,
            data:[0, 6, 24, 46, 46, 50, 59, 65, 65, 73, 81, 89, 95, 95],
            borderColor: '#E56717',
            backgroundColor: '#E56717',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Alpine',
            fill:false,
            data:[8, 16, 22, 22, 26, 34, 40, 47, 57, 67, 81, 93, 99, 115],
            borderColor: '#4a69bd',
            backgroundColor: '#4a69bd',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Alpha Tauri',
            fill:false,
            data:[4, 8, 10, 16, 16, 17, 17, 27, 27, 27, 27, 27, 27, 29],
            borderColor: '#82ccdd',
            backgroundColor: '#82ccdd',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Aston Martin',
            fill:false,
            data:[0, 0, 0, 5, 6, 6, 7, 15, 16, 18, 18, 19, 20, 24],
            borderColor: '#10ac84',
            backgroundColor: '#10ac84',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Williams',
            fill:false,
            data:[0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
            borderColor: '#00a8ff',
            backgroundColor: '#00a8ff',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Alfa Romeo',
            fill:false,
            data:[9, 9, 13, 25, 31, 39, 41, 41, 51, 51, 51, 51, 51, 51],
            borderColor: '#ff4757',
            backgroundColor: '#ff4757',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          },
          {
            label:'Haas',
            fill:false,
            data:[10,	12,	12,	15,	15,	15,	15,	15,	15,	20, 34, 34, 34, 34],
            borderColor: '#ced6e0',
            backgroundColor: '#ced6e0',
            pointRadius:1, 
            pointHitRadius:8,
            pointHoverRadius:6,
          }
        
        ],
    }
  return (
    <div id='canvas-container'>
      <Line data={data} options={options} />   
    </div>
  )
}
