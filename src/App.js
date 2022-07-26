import './App.css';
import * as React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import { Grid, AppBar, Toolbar, Card } from '@mui/material';

import { Container } from '@mui/system';

import { Teams_switch } from './components/Teams_switch';
import { Drivers_switch } from './components/Drivers_switch';




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




function App() {
  
  

  return (
    <Container>
      <ThemeProvider theme={theme}>
      <div className="App">
      
      {/* es la parte de arriba  */}  
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
              Stats
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={12} xl={12} >
          <Card >
            <Teams_switch></Teams_switch>
          </Card>    
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12} >
          <Card >
            <Drivers_switch></Drivers_switch>
          </Card>    
          </Grid>
        </Grid> 
        

      </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
