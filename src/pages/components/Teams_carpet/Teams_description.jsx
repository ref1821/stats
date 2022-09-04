import React, {useState} from 'react'
import { Grid, Card, styled, IconButton, Collapse, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Teams_card} from './Teams_card'
import { Alldata } from '../../components/Elements/Alldata'

import '../../components/Elements/Graficas.css'

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

const Ver = 310
const Per = 201
const Lec = 201
const Sai = 175
const Ham = 158
const Rus = 188
const Nor = 82
const Ric = 19
const Alo = 59
const Oco = 66
const Bot = 46
const Zho = 5
const Mag = 22
const Msc = 12
const Gas = 18
const Tsu = 11
const Vet = 20
const Str = 5
const Alb = 4
const Lat = 0

const rbTot = Ver+Per
const ferTot = Lec+Sai
const merTot = Ham+Rus
const mclTot = Nor+Ric
const alpTot = Alo+Oco
const alfTot = Bot+Zho
const haasTot = Mag+Msc
const altTot = Gas+Tsu
const astTot = Vet+Str
const wilTot = Alb+Lat

var verPor = (Ver/rbTot)*100
var verPor = verPor.toFixed(2)
var perPor = (Per/rbTot)*100
var perPor = perPor.toFixed(2)

var lecPor = (Lec/ferTot)*100
var lecPor = lecPor.toFixed(2)
var saiPor = (Sai/ferTot)*100
var saiPor = saiPor.toFixed(2)

var hamPor = (Ham/merTot)*100
var hamPor = hamPor.toFixed(2)
var rusPor = (Rus/merTot)*100
var rusPor = rusPor.toFixed(2)

var norPor = (Nor/mclTot)*100
var norPor = norPor.toFixed(2)
var ricPor = (Ric/mclTot)*100
var ricPor = ricPor.toFixed(2)

var aloPor = (Alo/alpTot)*100
var aloPor = aloPor.toFixed(2)
var ocoPor = (Oco/alpTot)*100
var ocoPor = ocoPor.toFixed(2)

var botPor = (Bot/alfTot)*100
var botPor = botPor.toFixed(2)
var zhoPor = (Zho/alfTot)*100
var zhoPor = zhoPor.toFixed(2)

var magPor = (Mag/haasTot)*100
var magPor = magPor.toFixed(2)
var mscPor = (Msc/haasTot)*100
var mscPor = mscPor.toFixed(2)

var gasPor = (Gas/altTot)*100
var gasPor = gasPor.toFixed(2)
var tsuPor = (Tsu/altTot)*100
var tsuPor = tsuPor.toFixed(2)

var vetPor = (Vet/astTot)*100
var vetPor = vetPor.toFixed(2)
var strPor = (Str/astTot)*100
var strPor = strPor.toFixed(2)

var albPor = (Alb/wilTot)*100
var albPor = albPor.toFixed(2)
var latPor = (Lat/wilTot)*100
var latPor = latPor.toFixed(2)



export const RBdata = {
    labels: ['Ver', 'Per'],
    datasets: [
      {
        label: 'Points',
        data: [Ver, Per],
        backgroundColor: [
          '#341f97',
          '#ff3838',
        ],
        borderColor: [
          '#341f97',
          '#ff3838',
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
        data: [Lec, Sai],
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
export const Merdata = {
    labels: ['Ham', 'Rus'],
    datasets: [
      {
        label: 'Points',
        data: [Ham, Rus],
        backgroundColor: [
          '#a5b1c2',
          '#2bcbba',
        ],
        borderColor: [
          '#a5b1c2',
          '#2bcbba',
        ],
        borderWidth: 1,
        },
    ],
};
export const Mcldata = {
    labels: ['Nor', 'Ric'],
    datasets: [
      {
        label: 'Points',
        data: [Nor, Ric],
        backgroundColor: [
          '#fa8231',
          '#4b6584',
        ],
        borderColor: [
          '#fa8231',
          '#4b6584',
        ],
        borderWidth: 1,
        },
    ],
};
export const Alpdata = {
    labels: ['Alo', 'Oco'],
    datasets: [
      {
        label: 'Points',
        data: [Alo, Oco],
        backgroundColor: [
          '#4b7bec',
          '#f78fb3',
        ],
        borderColor: [
          '#4b7bec',
          '#f78fb3',
        ],
        borderWidth: 1,
        },
    ],
};



export const AlRdata = {
    labels: ['Bot', 'Zho'],
    datasets: [
      {
        label: 'Points',
        data: [Bot, Zho],
        backgroundColor: [
          '#f53b57',
          '#d2dae2',
        ],
        borderColor: [
          '#f53b57',
          '#d2dae2',
        ],
        borderWidth: 1,
        },
    ],
};
export const Haasdata = {
    labels: ['Mag', 'Msc'],
    datasets: [
      {
        label: 'Points',
        data: [Mag, Msc],
        backgroundColor: [
          '#808e9b',
          '#d2dae2',
        ],
        borderColor: [
          '#808e9b',
          '#d2dae2',
        ],
        borderWidth: 1,
        },
    ],
};
export const AlTdata = {
    labels: ['Gas', 'Tsu'],
    datasets: [
      {
        label: 'Points',
        data: [Gas, Tsu],
        backgroundColor: [
          '#1e90ff',
          '#ffffff',
        ],
        borderColor: [
          '#1e90ff',
          '#a4b0be',
        ],
        borderWidth: 1,
        },
    ],
};
export const Astdata = {
    labels: ['Vet', 'Str'],
    datasets: [
      {
        label: 'Points',
        data: [Vet, Str],
        backgroundColor: [
          '#009432',
          '#222f3e',
        ],
        borderColor: [
          '#009432',
          '#222f3e',
        ],
        borderWidth: 1,
        },
    ],
};
export const Wildata = {
    labels: ['Alb', 'Lat'],
    datasets: [
      {
        label: 'Points',
        data: [Alb, Lat],
        backgroundColor: [
          '#341f97',
          '#f1f2f6',
        ],
        borderColor: [
          '#341f97',
          '#f1f2f6',
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
            <Grid item xs={12} sm={12} md={12} xl={12} >
                <Card>
                    <Typography>Stats Per Team(SPT)</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon /> 
                    </ExpandMore>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>       
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, xl: 1.5 }}>    
                            <Teams_card name='Red Bull' size={12} piesize={6} data={RBdata} driverOne={'VER '+ verPor} positionOne={1} onePoints={Ver} driverTwo={'PER '+ perPor} positionTwo={2} twoPoints={Per} points={Ver+Per} position={1} wins={11} podiums={19} dnf={5} pole={5}></Teams_card>
                            <Teams_card name='Ferrari' size={4} piesize={7} data={Ferdata} driverOne={'LEC '+ lecPor} positionOne={3} onePoints={Lec} driverTwo={'SAI '+ saiPor} positionTwo={4} twoPoints={Sai} points={Lec+Sai} position={2} wins={4} podiums={13} dnf={7} pole={9}></Teams_card>
                            <Teams_card name='Mercedes' size={4} piesize={7} data={Merdata} driverOne={'HAM '+ hamPor} positionOne={6} onePoints={Ham} driverTwo={'RUS '+ rusPor} positionTwo={5} twoPoints={Rus} points={Ham+Rus} position={3} wins={0} podiums={12} dnf={2} pole={1}></Teams_card>
                            <Teams_card name='Mclaren' size={4} piesize={7} data={Mcldata} driverOne={'NOR '+ norPor} positionOne={7} onePoints={Nor} driverTwo={'RIC '+ ricPor} positionTwo={13} twoPoints={Ric} points={Nor+Ric} position={4} wins={0} podiums={1} dnf={2} pole={0}></Teams_card>
                            <Teams_card name='Alpine' size={4} piesize={7} data={Alpdata} driverOne={'ALO '+ aloPor} positionOne={9} onePoints={Alo} driverTwo={'OCO '+ ocoPor} positionTwo={8} twoPoints={Oco} points={Alo+Oco} position={5} wins={0} podiums={0} dnf={3} pole={0}></Teams_card>
                            <Teams_card name='Alfa Romeo' size={4} piesize={7} data={AlRdata} driverOne={'BOT '+ botPor} positionOne={10} onePoints={Bot} driverTwo={'ZHO '+ zhoPor} positionTwo={17} twoPoints={Zho} points={Bot+Zho} position={6} wins={0} podiums={0} dnf={9} pole={0}></Teams_card>
                            <Teams_card name='Haas' size={4} piesize={7} data={Haasdata} driverOne={'MAG '+ magPor} positionOne={11} onePoints={Mag} driverTwo={'MSC '+ mscPor} positionTwo={15} twoPoints={Msc} points={Mag+Msc} position={7} wins={0} podiums={0} dnf={7} pole={0}></Teams_card>
                            <Teams_card name='Alpha Tauri' size={4} piesize={7} data={AlTdata} driverOne={'GAS '+ gasPor} positionOne={14} onePoints={Gas} driverTwo={'TSU '+ tsuPor} positionTwo={16} twoPoints={Tsu} points={Gas+Tsu} position={8} wins={0} podiums={0} dnf={7} pole={0}></Teams_card>
                            <Teams_card name='Aston Martin' size={4} piesize={7} data={Astdata} driverOne={'VET '+ vetPor} positionOne={12} onePoints={Vet} driverTwo={'STR '+ strPor} positionTwo={19} twoPoints={Str} points={Vet+Str} position={9} wins={0} podiums={0} dnf={5} pole={0}></Teams_card>
                            <Teams_card name='Williams' size={4} piesize={7} data={Wildata} driverOne={'ALB '+ albPor} positionOne={18} onePoints={Alb} driverTwo={'LAT '+ latPor} positionTwo={20} twoPoints={Lat} points={Alb+Lat} position={10} wins={0} podiums={0} dnf={4} pole={0}></Teams_card>    
                        </Grid>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}
