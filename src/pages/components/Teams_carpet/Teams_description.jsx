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

const Ver = 258
const Per = 173
const Lec = 178
const Sai = 156
const Ham = 146
const Rus = 158
const Nor = 76
const Ric = 19
const Alo = 41
const Oco = 58
const Bot = 46
const Zho = 5
const Mag = 22
const Msc = 12
const Gas = 16
const Tsu = 11
const Vet = 16
const Str = 4
const Alb = 3
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
export const Merdata = {
    labels: ['Ham', 'Rus'],
    datasets: [
      {
        label: 'Points',
        data: [146, 158],
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
        data: [76, 19],
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
        data: [178, 156],
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
        data: [46, 5],
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
        data: [22, 12],
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
        data: [16, 11],
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
        data: [16, 4],
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
        data: [3, 0],
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
                            <Teams_card name='Red Bull' size={12} piesize={6} data={RBdata} driverOne={'VER '+ verPor} positionOne={1} onePoints={258} driverTwo={'PER '+ perPor} positionTwo={3} twoPoints={173} points={431} position={1} wins={9} podiums={16} dnf={5} pole={4}></Teams_card>
                            <Teams_card name='Ferrari' size={4} piesize={7} data={Ferdata} driverOne={'LEC '+ lecPor} positionOne={2} onePoints={178} driverTwo={'SAI '+ saiPor} positionTwo={5} twoPoints={156} points={334} position={2} wins={4} podiums={11} dnf={7} pole={8}></Teams_card>
                            <Teams_card name='Mercedes' size={4} piesize={7} data={Merdata} driverOne={'HAM '+ hamPor} positionOne={6} onePoints={146} driverTwo={'RUS '+ rusPor} positionTwo={4} twoPoints={158} points={304} position={3} wins={0} podiums={11} dnf={1} pole={1}></Teams_card>
                            <Teams_card name='Mclaren' size={4} piesize={7} data={Mcldata} driverOne={'NOR '+ norPor} positionOne={7} onePoints={76} driverTwo={'RIC '+ ricPor} positionTwo={12} twoPoints={19} points={99} position={4} wins={0} podiums={1} dnf={2} pole={0}></Teams_card>
                            <Teams_card name='Alpine' size={4} piesize={7} data={Alpdata} driverOne={'ALO '+ aloPor} positionOne={8} onePoints={41} driverTwo={'OCO '+ ocoPor} positionTwo={10} twoPoints={58} points={95} position={5} wins={0} podiums={0} dnf={3} pole={0}></Teams_card>
                            <Teams_card name='Alfa Romeo' size={4} piesize={7} data={AlRdata} driverOne={'BOT '+ botPor} positionOne={9} onePoints={46} driverTwo={'ZHO '+ zhoPor} positionTwo={17} twoPoints={5} points={51} position={6} wins={0} podiums={0} dnf={7} pole={0}></Teams_card>
                            <Teams_card name='Haas' size={4} piesize={7} data={Haasdata} driverOne={'MAG '+ magPor} positionOne={11} onePoints={22} driverTwo={'MSC '+ mscPor} positionTwo={15} twoPoints={12} points={34} position={7} wins={0} podiums={0} dnf={7} pole={0}></Teams_card>
                            <Teams_card name='Alpha Tauri' size={4} piesize={7} data={AlTdata} driverOne={'GAS '+ gasPor} positionOne={13} onePoints={16} driverTwo={'TSU '+ tsuPor} positionTwo={16} twoPoints={11} points={27} position={8} wins={0} podiums={0} dnf={6} pole={0}></Teams_card>
                            <Teams_card name='Aston Martin' size={4} piesize={7} data={Astdata} driverOne={'VET '+ vetPor} positionOne={14} onePoints={16} driverTwo={'STR '+ strPor} positionTwo={18} twoPoints={4} points={20} position={9} wins={0} podiums={0} dnf={5} pole={0}></Teams_card>
                            <Teams_card name='Williams' size={4} piesize={7} data={Wildata} driverOne={'ALB '+ albPor} positionOne={19} onePoints={3} driverTwo={'LAT '+ latPor} positionTwo={20} twoPoints={0} points={3} position={10} wins={0} podiums={0} dnf={4} pole={0}></Teams_card>    
                        </Grid>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}
