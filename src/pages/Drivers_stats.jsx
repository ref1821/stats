import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, createTheme, Container, ThemeProvider, Grid, Button, Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import {Drivers_switch} from './components/Drivers_switch'
import {Drivers_chart} from './components/Drivers_chart'
import {Drivers_description} from './components/Drivers_description'

import Topbar from './components/Topbar'

const theme = createTheme({
    palette: {
      primary: {
        main: red[600],
      },
      secondary: {
        main: red[200],
      },
  }
})



export const Drivers_stats = () => {
  return (
    <Container>
            <ThemeProvider theme={theme}>
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
