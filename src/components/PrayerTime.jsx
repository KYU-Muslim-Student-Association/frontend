import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Random from './Random';

function createData(prayer, time) {
  return { prayer, time };
}

const rows = [
  createData('Fajr', '05:19 AM'),
  createData('Dhuhr', '12:45 PM'),
  createData('Asr', '04:15 PM'),
  createData('Maghrib', '18:45 PM'),
  createData('Isha', '20:15 PM'),
];

export default function PrayerTime() {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '20vh', marginBottom: '20vh', textAlign: 'center' }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant='h3'
            className='heading'
            sx={{ fontWeight: '900' }}
          >
            <span>Prayer</span> Times
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 50 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Prayer</TableCell>
                  <TableCell align='center'>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center'>{row.prayer}</TableCell>
                    <TableCell align='center'>{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>
          <Random />
        </Grid>
      </Grid>
    </Container>
  );
}
