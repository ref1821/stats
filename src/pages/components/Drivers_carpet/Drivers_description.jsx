import React, {useEffect}from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { Grid } from '@mui/material'
import {Drivers_card} from './Drivers_card'
import db from '../../../firebase'
import '../../components/Elements/Graficas.css'
import {Ver, Per, Lec, Sai, Ham, Rus, Nor, Ric, Alo, Oco, Mag, Msc, Bot, Zho, Gas, Tsu, Vet, Str, Alb, Lat, Dev, Hul,
  Verdata, Lecdata, Perdata, Rusdata, Saidata, Hamdata, Nordata, Ocodata, Alodata, Botdata, Gasdata, Magdata, Vetdata, Ricdata, Mscdata, Tsudata, Zhodata, Strdata, Albdata, Latdata, Devdata, Huldata
  } from '../../Data'

export const options = {
    responsive: true,
    maintainAspectRatio: false,
};
export const Drivers_description = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
        <Drivers_card name="Verstappen" points={Ver} position='1' datas={Verdata} size={6} wins={11} podiums='13' pole='4' dnf='2'></Drivers_card>
        <Drivers_card name="Leclerc" points={Lec} position='2' datas={Lecdata} size={6} wins={3} podiums='8' pole='9' dnf='3'></Drivers_card>
        <Drivers_card name="Perez" points={Per} position='3' datas={Perdata} size={4} wins={2} podiums='8' pole='3' dnf='2'></Drivers_card>
        <Drivers_card name="Russel" points={Rus} position='4' datas={Rusdata} size={4} wins={0} podiums='8' pole='1' dnf='1'></Drivers_card>
        <Drivers_card name="Sainz" points={Sai} position='5' datas={Saidata} size={4} wins={1} podiums='8' pole='2' dnf='4'></Drivers_card>
        <Drivers_card name="Hamilton" points={Ham} position='6' datas={Hamdata} size={4} wins={0} podiums='6' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Norris" points={Nor} position='7' datas={Nordata} size={4} wins={0} podiums='1' pole='0' dnf='1'></Drivers_card>
        <Drivers_card name="Ocon" points={Oco} position='8' datas={Ocodata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="Alonso" points={Alo} position='9' datas={Alodata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Bottas" points={Bot} position='10' datas={Botdata} size={4} wins={0} podiums='0' pole='0' dnf='5'></Drivers_card>
        <Drivers_card name="Ricciardo" points={Ric} position='11' datas={Ricdata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="Vettel" points={Vet} position='12' datas={Vetdata} size={4} wins={0} podiums='0' pole='0' dnf='5(2 DNS)'></Drivers_card>
        <Drivers_card name="Gasly" points={Gas} position='13' datas={Gasdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        <Drivers_card name="Magnussen" points={Mag} position='14' datas={Magdata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Stroll" points={Str} position='15' datas={Strdata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="Schumacher" points={Msc} position='16' datas={Mscdata} size={4} wins={0} podiums='0' pole='0' dnf='3(1 DNS)'></Drivers_card>
        <Drivers_card name="Tsunoda" points={Tsu} position='17' datas={Tsudata} size={4} wins={0} podiums='0' pole='0' dnf='5(1 DNS)'></Drivers_card>
        <Drivers_card name="Zhou" points={Zho} position='18' datas={Zhodata} size={4} wins={0} podiums='0' pole='0' dnf='5'></Drivers_card>
        <Drivers_card name="Albon" points={Alb} position='19' datas={Albdata} size={4} wins={0} podiums='0' pole='0' dnf='2'></Drivers_card>
        <Drivers_card name="De Vries" points={Dev} position='20' datas={Devdata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
        <Drivers_card name="Latifi" points={Lat} position='21' datas={Latdata} size={4} wins={0} podiums='0' pole='0' dnf='4'></Drivers_card>
        <Drivers_card name="Hulkenberg" points={Hul} position='22' datas={Huldata} size={4} wins={0} podiums='0' pole='0' dnf='3'></Drivers_card>
    </Grid>
  )
}
