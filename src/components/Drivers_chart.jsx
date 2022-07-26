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
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'WDC',
      },
    },
};

export const Drivers_chart = () => {
    const data={
        labels:['BAHRAIN',	'JEDDAH',	'AUSTRALIA',	'IMOLA',	'MIAMI',	'SPAIN',	'MONACO',	'BAKU',	'CANADA',	'SILVERSTONE',	'RB RING', 'PAUL RICARD'],
        datasets:[
          {
            label:'Verstappen',
            fill:false,
            data:[0, 25, 25, 59, 85, 110, 125, 150, 175, 181, 208, 233],
            borderColor: '#0c2461',
            backgroundColor: '#0c2461',
          },
          {
            label:'Perez',
            fill:false,
            data:[0, 12, 30, 54, 66, 85, 110, 129, 129, 147, 151, 163],
            borderColor: '#0c2481',
            backgroundColor: '#0c2481',
          },
          {
            label:'Leclerc',
            fill:false,
            data:[26, 45, 71, 86, 104, 104, 116, 116, 126, 138, 170, 170],
            borderColor: '#b71540',
            backgroundColor: '#b71540',
          },
          {
            label:'Sainz',
            fill:false,
            data:[18, 33, 33, 38, 53, 65, 83, 83, 102, 127, 133, 144],
            borderColor: '#b71560',
            backgroundColor: '#b71560',
          },
          {
            label:'Hamilton',
            fill:false,
            data:[15, 16, 28, 28, 36, 46, 50, 62, 77, 93, 109, 127],
            borderColor: '#718093',
            backgroundColor: '#718093',
          },
          {
            label:'Russel',
            fill:false,
            data:[12, 22, 37, 49, 59, 74, 84, 99, 111, 111, 128, 143],
            borderColor: '#718073',
            backgroundColor: '#718073',
          },
          {
            label:'Norris',
            fill:false,
            data:[0, 6, 16, 35, 35, 39, 48, 50, 50, 58, 64, 70],
            borderColor: '#E56717',
            backgroundColor: '#E56717',
          },
          {
            label:'Ricciardo',
            fill:false,
            data:[0, 0, 8, 11, 11, 11, 11, 15, 15, 15, 17, 19],
            borderColor: '#E56737',
            backgroundColor: '#E56737',
          },
          {
            label:'Alonso',
            fill:false,
            data:[2, 2, 2, 2, 2, 4, 10, 16, 18, 28, 29, 37],
            borderColor: '#4a69bd',
            backgroundColor: '#4a69bd',
          },
          {
            label:'Ocon',
            fill:false,
            data:[6, 14, 20, 20, 24, 30, 30, 31, 39, 39, 52, 56],
            borderColor: '#4a89bd',
            backgroundColor: '#4a89bd',
          },
          {
            label:'Gasly',
            fill:false,
            data:[0, 4, 6, 6, 6, 6, 6, 16, 16, 16, 16, 16],
            borderColor: '#82ccdd',
            backgroundColor: '#82ccdd',
          },
          {
            label:'Tsunoda',
            fill:false,
            data:[4, 4, 4, 10, 10, 11, 11, 11, 11, 11, 11, 11],
            borderColor: '#62ccdd',
            backgroundColor: '#62ccdd',
          },
          {
            label:'Vettel',
            fill:false,
            data:[0, 0, 0, 4, 4, 4, 5, 13, 13, 15, 15, 15],
            borderColor: '#10ac84',
            backgroundColor: '#10ac84',
          },
          {
            label:'Stroll',
            fill:false,
            data:[0, 0, 0, 1, 2, 2, 2, 2, 3, 3, 3, 4],
            borderColor: '#10ac64',
            backgroundColor: '#10ac64',
          },
          {
            label:'Albon',
            fill:false,
            data:[0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3],
            borderColor: '#00a8ff',
            backgroundColor: '#00a8ff',
          },
          {
            label:'Latifi',
            fill:false,
            data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#00a4ff',
            backgroundColor: '#00a4ff',
          },
          {
            label:'Bottas',
            fill:false,
            data:[8, 8, 12, 24, 30, 38, 40, 40, 46, 46, 46, 46],
            borderColor: '#ff4757',
            backgroundColor: '#ff4757',
          },
          {
            label:'Zhou',
            fill:false,
            data:[1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5],
            borderColor: '#ff4777',
            backgroundColor: '#ff4777',
          },
          {
            label:'Magnussen',
            fill:false,
            data:[10, 12, 12, 15, 15, 15, 15, 15, 15, 16, 22, 22],
            borderColor: '#ced6e0',
            backgroundColor: '#ced6e0',
          },
          {
            label:'Schumacher',
            fill:false,
            data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 12],
            borderColor: '#ced6e1',
            backgroundColor: '#ced6e1',
          },
        
        ],
    }

  return (
    <div>
        <Container>
            <Line data={data} options={options} height={195}/>
        </Container>
    </div>
  )
}
