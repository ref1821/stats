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

export const Teams_chart = (props) => {
    const data={
        labels:['Ver', 'Lec', 'Per'],
        datasets:[{
            label:'Points',
            fill:false,
            data:[25, 18, 15],
        }],
    }
  return (
    <div>
        <Container>
            <Line data={data}  />
        </Container>
    </div>
  )
}
