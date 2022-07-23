import './App.css';
import * as React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import { Grid, Collapse, AppBar,FormControlLabel, Toolbar, Card } from '@mui/material';

import { Container } from '@mui/system';

import { Teams_switch } from './components/Teams_switch';
import {Teams_chart} from './components/Teams_chart';




const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
  }
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
        <Grid >
          <FormGroup>
            
            <FormControlLabel control={
              <Switch 
                defaultChecked 
              
              />} label="Drivers" 
            />
            
          </FormGroup>
        </Grid> 
        <Card>
          <Teams_switch></Teams_switch>
        </Card>
        

      </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
