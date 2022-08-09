import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AppBar, Toolbar, IconButton, Typography, createTheme, Container, ThemeProvider, Grid, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './components/Elements/Home.css'
import {deepOrange, grey, red} from '@mui/material/colors';
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





const Home = () => {
  return (
    <div>
        <Container>
            <ThemeProvider theme={darkTheme}>
            
      <CssBaseline />
      
                {/* La parte de arriba */}
                <Topbar></Topbar>

                {/* Los links */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, xl:2 }}>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <h1>F1</h1>
                      
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/WCC" className='tbtn'><Button variant='contained' text="Teams" color='primary'>WCC</Button></Link>
                      
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/WDC" className='tbtn'><Button variant='contained' text="Drivers" color="primary">WDC</Button></Link>
                      
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                      <Divider />
                        <h1>NFL</h1>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/QB" className='tbtn'><Button variant='contained' text="Drivers" color="secondary">QB</Button></Link>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <Link to="/RB" className='tbtn'><Button variant='contained' text="Drivers" color="secondary">RB</Button></Link>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    </div>
  )
}

export default Home