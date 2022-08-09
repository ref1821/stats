import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText, 
  Box, 
  CssBaseline,
  AppBar, Toolbar,
  Typography, Button, IconButton, Drawer, Divider, ListItemButton, createTheme, ThemeProvider} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';



import {Link, useNavigate} from 'react-router-dom'

import './Home.css'

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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

const Topbar= props => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => navigate("/")
    },
    {
      text: "WCC",
      icon: <EmojiEventsIcon />,
      onClick: () => navigate("/WCC")
    },
    {
      text: "WDC",
      icon: <EmojiEventsIcon />,
      onClick: () => navigate("/WDC")
    }
  ];

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }} color="primary">
      {/* Appbar */}
      <AppBar > 
          <Toolbar >

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                It´s stats out
              </Typography>

              <Button color="inherit">Login</Button>

            </Toolbar>
          </AppBar>
      {/* Fin del appbar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
        </List>
        <Divider />
      </Drawer>
    </Box>
    </ThemeProvider>
  );
}

export default Topbar;