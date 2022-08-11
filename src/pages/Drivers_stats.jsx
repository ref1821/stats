import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, createTheme, Container, ThemeProvider, Grid, Button, Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import {Drivers_switch} from './components/Drivers_carpet/Drivers_switch'
import {Drivers_chart} from './components/Drivers_carpet/Drivers_chart'
import {Drivers_description} from './components/Drivers_carpet/Drivers_description'
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './components/Elements/Topbar'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#b71540',
    },
    secondary:{
      main:'#1e3799',
    },
    
  },
});



export const Drivers_stats = () => {
  return (
    <Container>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline/>
                {/* La parte de arriba */}
                <Topbar></Topbar>
                <Drivers_chart></Drivers_chart>
                <Card >
                    <Drivers_switch></Drivers_switch>
                </Card>
                <Drivers_description></Drivers_description>
            </ThemeProvider>
        </Container>
  )
}
