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
import {red, teal} from '@mui/material/colors';
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

function createData(name, calories, fat, carbs, protein, miami,spain, monaco, baku, canada, silverstone, austria, francia, hungaroring) {
    return { name, calories: calories, fat: fat, carbs, protein, miami, spain, monaco, baku, canada, silverstone, austria, francia, hungaroring };
  }
  
const rows = [
    createData('Verstappen', 0, 25, 0, 34, 26, 25, 15, 25, 25, 6, 27, 25, 25),
    createData('Perez', 0, 12, 18, 24, 12, 19, 25, 19, 0, 18, 4, 12, 10),
    createData('Leclerc', 26, 19, 26, 15, 18, 0, 12, 0, 10, 12, 32, 0, 8),
    createData('Sainz', 18, 15, 0, 5, 15, 12, 18, 0, 19, 25, 6, 11, 12),
    createData('Hamilton', 15, 1, 12, 0, 8, 10, 4, 12, 15, 16, 16, 18, 19),
    createData('Russel', 12, 10, 15, 12, 10, 15, 10, 15, 12, 0, 17, 15, 15),
    createData('Norris', 0, 6, 10, 19, 0, 4, 9, 2, 0, 8, 6, 6, 6),
    createData('Ricciardo', 0, 0, 8, 3, 0, 0, 0, 4, 0, 0, 2, 2, 0),
    createData('Alonso', 2, 0, 0, 0, 0, 2, 6, 6, 2, 10, 1, 8, 4),
    createData('Ocon', 6, 8, 6, 0, 4, 6, 0, 1, 8, 0, 13, 4, 2),
    createData('Bottas', 8, 0, 4, 12, 6, 8, 2, 0, 6, 0, 0, 0, 0),
    createData('Zhou', 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0),
    createData('Magnussen', 10, 2, 0, 3, 0, 0, 0, 0, 0, 1, 6, 0 ,0),
    createData('Schumacher', 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 0, 0),
    createData('Gasly',0, 4, 2, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0 ),
    createData('Tsunoda', 4, 0, 0, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0),
    createData('Vettel', 0, 0, 0, 4, 0, 0, 1, 8, 0, 2, 0, 0, 1),
    createData('Stroll', 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0),
    createData('Albon', 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0),
    createData('Latifi', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  ];
  

export const Drivers_switch = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
  return (
    <Box>
        <ThemeProvider>
            <Typography>
                Drivers
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
                                <TableCell align="right">Hungaroring</TableCell>
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
                                <TableCell align="right">{row.hungaroring}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                </Collapse>
            </Typography>
        </ThemeProvider>
    </Box>
  )
}
