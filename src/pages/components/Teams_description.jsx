import React, {useState} from 'react'
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

export const RBdata = {
    labels: ['Ver', 'Per'],
    datasets: [
      {
        label: 'Points',
        data: [258, 173],
        backgroundColor: [
          '#341f97',
          '#ee5253',
        ],
        borderColor: [
          '#341f97',
          '#ee5253',
        ],
        borderWidth: 1,
        },
    ],
};


export const Ferdata = {
    labels: ['Lec', 'Sai'],
    datasets: [
      {
        label: 'Points',
        data: [178, 156],
        backgroundColor: [
          '#b71540',
          '#2f3640',
        ],
        borderColor: [
          '#b71540',
          '#2f3640',
        ],
        borderWidth: 1,
        },
    ],
};

export const Teams_description = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Tarjeta de Red Bull */}
            <Grid item xs={12} sm={12} md={6} xl={6} >
                <Card>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} xl={12} >
                            <Typography>RedBull
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
                                <Grid item xs={8} sm={8} md={8} xl={8} >
                                    <Pie data={RBdata} options={options} />
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} xl={4} >
                                    <p>VER 60%</p>
                                    <p>258 points (1°)</p>
                                    <p>PER 40%</p>
                                    <p>173 points (3°)</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    431 points 
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    (1°) WCC
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    9 Wins
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    16 Podios
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    5 DNF
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    1-2 (3 (Imola, Spain, Baku))
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Grid>
                </Card>
            </Grid>
            {/* Fin de la tarjeta de Red bull */}

            <Grid item xs={12} sm={12} md={6} xl={6} >
            <Card>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} xl={12} >
                            <Typography>Ferrari
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
                                <Grid item xs={8} sm={8} md={8} xl={8} >
                                    <Pie data={Ferdata} options={options} />
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} xl={4} >
                                    <p>VER 60%</p>
                                    <p>258 points (1°)</p>
                                    <p>PER 40%</p>
                                    <p>173 points (3°)</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    431 points 
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    (1°) WCC
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    9 Wins
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    16 Podios
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    5 DNF
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} >
                                    1-2 (3 (Imola, Spain, Baku))
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}
