import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import { Grid, Card } from '@mui/material';
import { Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { Teams_table } from './components/Teams_carpet/Teams_table';
import { Teams_chart} from './components/Teams_carpet/Teams_chart';
import { Teams_description } from './components/Teams_carpet/Teams_description';
import  Topbar  from './components/Elements/Topbar';

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





const label = { inputProps: { 'aria-label': 'Switch demo' } };


export const Teams_stats = () => {
  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        {/* es la parte de arriba  */}  
        <Topbar></Topbar>
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
