import React, {useState}from 'react'
import { Grid, Card, styled, IconButton, Collapse, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Graficas.css'

ChartJS.register(
    ArcElement, Tooltip, Legend
  );

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export const Verdata = {
    labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
    datasets: [
      {
        label: 'RACES',
        data: [8, 2, 1, 2],
        backgroundColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderWidth: 1,
        },
    ],
};
export const Lecdata = {
    labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
    datasets: [
      {
        label: 'RACES',
        data: [3, 2, 5, 3],
        backgroundColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderWidth: 1,
        },
    ],
};
export const Perdata = {
    labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
    datasets: [
      {
        label: 'RACES',
        data: [8, 2, 1, 2],
        backgroundColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderWidth: 1,
        },
    ],
};
export const Saidata = {
    labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
    datasets: [
      {
        label: 'RACES',
        data: [8, 2, 1, 2],
        backgroundColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderColor: [
          '#ffd32a',
          '#d2dae2',
          '#05c46b',
          '#ff3f34',
        ],
        borderWidth: 1,
        },
    ],
};

export const Drivers_description = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Tarjeta de Red Bull */}
            <Grid item xs={12} sm={12} md={6} xl={6} >
                <Card>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} xl={12} >
                            <Typography>VERSTAPPEN
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                                <ExpandMoreIcon /> 
                            </ExpandMore>
                            </Typography>

                        </Grid>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    <Pie data={Verdata} options={options} />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    <p>258 points</p>
                                    <p>Provisional Champion</p>
                                    <p>(1°) WDC</p>
                                    <p>8 Wins</p>
                                    <p>10 Podios</p>
                                    <p>3 pole position</p>
                                    <p>2 DNF</p>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} >
                <Card>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} xl={12} >
                            <Typography>LECLERC
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                                <ExpandMoreIcon /> 
                            </ExpandMore>
                            </Typography>

                        </Grid>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    <Pie data={Lecdata} options={options} />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    <p>178 points</p>
                                </Grid>                               
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    (2°) WCC
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    3 Wins
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    5 Podios
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    3 DNF
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={4} >
                                    7 pole position
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
  )
}
