import React, {useState}from 'react'
import { Grid, Card, styled, IconButton, Collapse, Typography, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../../components/Elements/Graficas.css'

ChartJS.register(
    ArcElement, Tooltip, Legend
  );

export const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export const Drivers_card = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
  return (
    <Grid item xs={12} sm={12} md={6} xl={props.size} >
        
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={12} xl={12} >
                    <Typography>
                        {props.name}
                    </Typography>

                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid item xs={6} sm={6} md={6} xl={6} >
                        <Pie data={props.datas} options={options} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6} >
                        <p>{props.points} points</p>
                        <p>{props.champ}</p>
                        <p>{props.position}° WDC</p>
                        <p>{props.wins} Wins</p>
                        <p>{props.podiums} Podios</p>
                        <p>{props.pole} pole position</p>
                        <p>{props.dnf} DNF</p>
                    </Grid>
                </Grid>
            </Grid>
        <Divider/>
    </Grid>
  )
}
