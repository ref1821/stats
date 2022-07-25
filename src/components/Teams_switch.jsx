import React, {useState} from 'react'
import {
    Box,
    styled,
    IconButton,
    Collapse,
    Typography,
    createTheme,
    ThemeProvider
    } from '@mui/material'
import {red} from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Teams_chart } from './Teams_chart';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

{/*const theme = createTheme({
    components:{
        typography:{
            fontFamily:[
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ]
        }
    },
    palette: {
        primary: {
            main: red[600],
        }
    },
})*/}

function createData(name, calories, fat, carbs, protein, miami,spain, monaco, baku, canada, silverstone, austria, francia) {
    return { name, calories: calories, fat: fat, carbs, protein, miami, spain, monaco, baku, canada, silverstone, austria, francia };
  }
  
  const rows = [
    createData('Red Bull', 0, 37, 18, 58, 38, 44, 40, 44, 25, 24, 31, 37),
    createData('Ferrari', 44, 34, 26, 20, 33, 12, 30, 0,	29,	37,	38, 11),
    createData('Mercedes', 27,	11,	27,	12,	18,	25,	14,	27,	27,	16,	33, 33),
    createData('Mclaren', 0,	6,	18,	22,	0,	4,	9,	6,	0,	8,	8, 8 ),
    createData('Alpine', 8,	8,	6,	0,	4,	8,	6,	7,	10,	10,	14, 12),
    createData('Alfa Romeo', 9,	0,	4,	12,	6,	8,	2,	0,	10,	0,	0, 0),
    createData('Haas', 10,	2,	0,	3,	0,	0,	0,	0,	0,	5,	14, 0),
    createData('Alpha Tauri', 4,	4,	2,	6,	0,	1,	0,	10,	0,	0, 0, 0),
    createData('Aston Martin', 0,	0,	0,	5,	1,	0,	1,	8,	1,	2,	0, 1),
    createData('Williams', 0,	0,	1,	0,	2,	0,	0,	0,	0,	0,	0, 0),
  ];
  

export const Teams_switch = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    
    
  return (
    <Box>
        <ThemeProvider>
            <Typography>
                Teams
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more" 
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Team</TableCell>
                                <TableCell align="right">Bahrain</TableCell>
                                <TableCell align="right">Jeddah</TableCell>
                                <TableCell align="right">Australia</TableCell>
                                <TableCell align="right">Imola</TableCell>
                                <TableCell align="right">Miami</TableCell>
                                <TableCell align="right">Spain</TableCell>
                                <TableCell align="right">Monaco</TableCell>
                                <TableCell align="right">Baku</TableCell>
                                <TableCell align="right">Canada</TableCell>
                                <TableCell align="right">Silverstone</TableCell>
                                <TableCell align="right">Austria</TableCell>
                                <TableCell align="right">Paul Ricard</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.miami}</TableCell>
                                <TableCell align="right">{row.spain}</TableCell>
                                <TableCell align="right">{row.monaco}</TableCell>
                                <TableCell align="right">{row.baku}</TableCell>
                                <TableCell align="right">{row.canada}</TableCell>
                                <TableCell align="right">{row.silverstone}</TableCell>
                                <TableCell align="right">{row.austria}</TableCell>
                                <TableCell align="right">{row.francia}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Teams_chart></Teams_chart>
                </Collapse>
            </Typography>
        </ThemeProvider>
    </Box>
  )
}
