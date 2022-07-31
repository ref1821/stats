import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, createTheme, Container, ThemeProvider, Grid, Button, Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import {Drivers_switch} from './components/Drivers_switch'


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
                </AppBar>

                <Card >
                    <Drivers_switch></Drivers_switch>
                </Card>
            </ThemeProvider>
        </Container>
  )
}
