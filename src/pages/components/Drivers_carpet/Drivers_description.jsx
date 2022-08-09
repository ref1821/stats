import React, {useState}from 'react'
import { Grid, Card, styled, IconButton, Collapse, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../../components/Elements/Graficas.css'
import {Drivers_card} from './Drivers_card'

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
        data: [1, 5, 4, 3],
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
export const Rusdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
  datasets: [
    {
      label: 'RACES',
      data: [0, 6, 6, 1],
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
        data: [1, 5, 3, 4],
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
export const Hamdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH','No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 6, 6, 0, 1],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Nordata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 1, 9, 1, 2],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Ocodata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 10, 1, 2],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Botdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 7, 3, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Alodata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 9, 2, 2],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Magdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 5, 4, 4],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Ricdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 5, 7, 1],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Gasdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 3, 7, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Vetdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 5, 4, 4],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Mscdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 2, 8, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Tsudata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 3, 7, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Zhodata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 2, 7, 4],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Strdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 4, 8, 1],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Albdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 2, 8, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderWidth: 1,
      },
  ],
};
export const Latdata = {
  labels: ['WINS', 'PODIUM','POINTS FINISH', 'No points','DNF' ],
  datasets: [
    {
      label: 'RACES',
      data: [0, 0, 0, 10, 3],
      backgroundColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
        '#ff3f34',
      ],
      borderColor: [
        '#ffd32a',
        '#d2dae2',
        '#05c46b',
        '#ff6348',
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
        <Drivers_card name="Verstappen" points='258' position='1' datas={Verdata} size={6} wins={8} podiums='10' pole='3' dnf='2'></Drivers_card>
        <Drivers_card name="Leclerc" points='178' position='2' datas={Lecdata} size={6} wins={3} podiums='5' pole='7' dnf='3'></Drivers_card>
        <Drivers_card name="Perez" points='173' position='3' datas={Perdata} size={4} wins={8} podiums='10' pole='3' dnf='2'></Drivers_card>
        <Drivers_card name="Russel" points='158' position='4' datas={Rusdata} size={4} wins={0} podiums='6' pole='1' dnf='1'></Drivers_card>
        <Drivers_card name="Sainz" points='156' position='5' datas={Saidata} size={4} wins={1} podiums='6' pole='1' dnf='4'></Drivers_card>
        <Drivers_card name="Hamilton" points='146' position='6' datas={Hamdata} size={4} wins={0} podiums='6' pole='0' dnf='0'></Drivers_card>
        <Drivers_card name="Norris" points='76' position='7' datas={Nordata} size={4} wins={0} podiums='1' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Ocon" points='58' position='8' datas={Ocodata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Bottas" points='46' position='9' datas={Botdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        <Drivers_card name="Alonso" points='41' position='10' datas={Alodata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="Magnussen" points='22' position='11' datas={Magdata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Ricciardo" points='19' position='12' datas={Ricdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Gasly" points='16' position='13' datas={Gasdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        <Drivers_card name="Vettel" points='16' position='14' datas={Vetdata} size={4} wins={0} podiums='0' pole='0' dnf='4(2 DNS)'></Drivers_card>
        <Drivers_card name="Schumacher" points='12' position='15' datas={Mscdata} size={4} wins={0} podiums='0' pole='0' dnf='3(1 DNS)'></Drivers_card>
        <Drivers_card name="Tsunoda" points='11' position='16' datas={Tsudata} size={4} wins={0} podiums='0' pole='0' dnf='3(1 DNS)'></Drivers_card>
        <Drivers_card name="Zhou" points='5' position='17' datas={Zhodata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Stroll" points='4' position='18' datas={Strdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Albon" points='3' position='19' datas={Albdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Latifi" points='0' position='20' datas={Latdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
    </Grid>
  )
}
