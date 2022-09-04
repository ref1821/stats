import React, {useEffect}from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { Grid } from '@mui/material'
import {Drivers_card} from './Drivers_card'
import db from '../../../firebase'
import '../../components/Elements/Graficas.css'


export const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export const Verdata = {
    labels: ['WINS', 'PODIUM','POINTS FINISH', 'DNF'],
    datasets: [
      {
        label: 'RACES',
        data: [10, 2, 1, 2],
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
        data: [3, 3, 6, 3],
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
        data: [1, 6, 5, 3],
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
      data: [0, 7, 7, 1],
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
        data: [1, 6, 4, 4],
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
      data: [0, 6, 7, 1, 1],
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
      data: [0, 1, 10, 2, 2],
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
      data: [0, 0, 12, 1, 2],
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
      data: [0, 0, 7, 3, 5],
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
      data: [0, 0, 11, 2, 2],
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
      data: [0, 0, 5, 6, 4],
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
      data: [0, 0, 5, 9, 1],
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
      data: [0, 0, 4, 8, 3],
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
      data: [0, 0, 6, 5, 4],
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
      data: [0, 0, 2, 10, 3],
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
      data: [0, 0, 3, 8, 4],
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
      data: [0, 0, 2, 9, 4],
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
      data: [0, 0, 5, 9, 1],
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
      data: [0, 0, 3, 9, 3],
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
      data: [0, 0, 0, 12, 3],
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
    useEffect(()=>{
      const obtenerDatos = async() =>{
        const datos = await getDocs(collection(db, 'drivers'))
        var Ver=datos.docs[0].data.points()
        console.log(datos.docs[1].data())
        console.log(Ver)
      }
      obtenerDatos();
    }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
        <Drivers_card name="Verstappen" points={310} position='1' datas={Verdata} size={6} wins={10} podiums='12' pole='4' dnf='2'></Drivers_card>
        <Drivers_card name="Perez" points='201' position='2' datas={Perdata} size={6} wins={8} podiums='7' pole='3' dnf='2'></Drivers_card>
        <Drivers_card name="Leclerc" points='201' position='2' datas={Lecdata} size={4} wins={3} podiums='6' pole='7' dnf='3'></Drivers_card>
        <Drivers_card name="Russel" points='188' position='4' datas={Rusdata} size={4} wins={0} podiums='7' pole='1' dnf='1'></Drivers_card>
        <Drivers_card name="Sainz" points='175' position='5' datas={Saidata} size={4} wins={1} podiums='7' pole='2' dnf='4'></Drivers_card>
        <Drivers_card name="Hamilton" points='158' position='6' datas={Hamdata} size={4} wins={0} podiums='6' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Norris" points='82' position='7' datas={Nordata} size={4} wins={0} podiums='1' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Ocon" points='66' position='8' datas={Ocodata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Alonso" points='59' position='9' datas={Alodata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="Bottas" points='46' position='10' datas={Botdata} size={4} wins={0} podiums='0' pole='0' dnf='5'></Drivers_card>
        <Drivers_card name="Magnussen" points='22' position='11' datas={Magdata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Vettel" points='20' position='12' datas={Vetdata} size={4} wins={0} podiums='0' pole='0' dnf='4(2 DNS)'></Drivers_card>
        <Drivers_card name="Ricciardo" points='19' position='13' datas={Ricdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Gasly" points='18' position='14' datas={Gasdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        <Drivers_card name="Schumacher" points='12' position='15' datas={Mscdata} size={4} wins={0} podiums='0' pole='0' dnf='3(1 DNS)'></Drivers_card>
        <Drivers_card name="Tsunoda" points='11' position='16' datas={Tsudata} size={4} wins={0} podiums='0' pole='0' dnf='4(1 DNS)'></Drivers_card>
        <Drivers_card name="Zhou" points='5' position='17' datas={Zhodata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Stroll" points='5' position='17' datas={Strdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Albon" points='4' position='19' datas={Albdata} size={4} wins={0} podiums='0' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Latifi" points='0' position='20' datas={Latdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        
    </Grid>
  )
}
