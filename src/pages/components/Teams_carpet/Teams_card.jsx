import React from 'react'
import {Grid, Typography, Divider} from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export const Teams_card = (props) => {
  return (
    <Grid item xs={12} sm={12} md={6} xl={props.size} >                            
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12} xl={12} >
                <Typography>
                    {props.name}
                </Typography>
            </Grid>
                                        
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, xl: 1 }}>
                <Grid item xs={6} sm={6} md={6} xl={props.piesize} >
                    <Pie data={props.data} options={options} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} xl={3} >
                    <p>{props.driverOne}% ({props.positionOne}°)WDC</p>
                    <p>{props.onePoints} points</p>
                    <p>{props.driverTwo}% ({props.positionTwo}°)WDC</p>
                    <p>{props.twoPoints} points</p>
                </Grid>
                <Grid item xs={3} sm={3} md={3} xl={2} >
                    <p>{props.points} points</p>     
                    <p>{props.position}° WCC</p>
                    <p>{props.wins} Wins</p>
                    <p>{props.podiums} Podios </p>                                                                          
                </Grid>
                <Grid item xs={6} sm={6} md={6} xl={6} >
                    {props.dnf} DNF
                </Grid>
                <Grid item xs={6} sm={6} md={6} xl={6} >
                    {props.pole} pole position
                </Grid>
            </Grid>
        </Grid>
        <Divider/>
    </Grid>
  )
}
