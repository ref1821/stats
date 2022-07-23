import React from 'react'
import {Line} from 'react-chartjs-2'
import {Container} from '@mui/material'

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
