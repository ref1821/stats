import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import { Grid, AppBar, Toolbar, Card } from '@mui/material';


import { Container } from '@mui/system';

import { Teams_table } from './components/Teams_table';

import { Teams_chart} from './components/Teams_chart';

import { Teams_description } from './components/Teams_description';

import  Topbar  from './components/Topbar';





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

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export const Teams_stats = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        {/* es la parte de arriba  */}  
        <Topbar></Topbar>
        {/*  
        <AppBar> 
          <Toolbar>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                F1 Stats
              </Typography>

              <Button color="inherit">Login</Button>

            </Toolbar>
          </AppBar>*/}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12} xl={12} >
              <Card >
                <Teams_chart></Teams_chart>
              </Card>  
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12} >
              <Card >
                <Teams_table></Teams_table>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12} >
              <Teams_description></Teams_description>
            </Grid>
          </Grid> 
      </ThemeProvider>
    </Container>
  )
}
