import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AppBar, Toolbar, IconButton, Typography, createTheme, Container, ThemeProvider, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import './components/Home.css'

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

const Home = () => {
  return (
    <div>
        <Container>
            <ThemeProvider theme={theme}>
                {/* La parte de arriba */}
                <Topbar></Topbar>

                {/* Los links */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, xl:2 }}>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/WCC" className='tbtn'><Button variant='contained' text="Teams" color="secondary">WCC</Button></Link>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/WDC" className='tbtn'><Button variant='contained' text="Drivers" color="secondary">WDC</Button></Link>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    </div>
  )
}

export default Home