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

function createData(week, event, day, date, time, venue, attendees) {
  return { week, event, day, date, time, venue, attendees };
}

const rows = [
  createData(
    4,
    "Qur'an Session",
    'Tuesday',
    ' 24 / 1 / 2023',
    '7PM - 8PM',
    'Prayer Room',
    'Muslim Men'
  ),
  createData(
    'Every Week',
    'Daawa Session',
    'Wednesday',
    'Weekly',
    '7PM - 8PM',
    'LH 21',
    'All Muslims(Men and Women)'
  ),
  createData(
    '5,7,9,11,',
    'Joint Committee Meeting',
    'Wednesday',
    'Wednesday of every odd week',
    '5PM- 6.30PM',
    'LH 21',
    'All Muslims(Men and Women)'
  ),
];

export default function CalendarEvent() {
  return (
    <Container maxWidth='xl' style={{ marginBottom: '100px' }}>
      <Typography className='heading' variant='h3' fontWeight={900}>
        Calendar
        <span> of Events</span>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Week</TableCell>
              <TableCell align='right'>Event</TableCell>
              <TableCell align='right'>Day</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Time</TableCell>
              <TableCell align='right'>Venue</TableCell>
              <TableCell align='right'>Attendees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.event}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.week}
                </TableCell>
                <TableCell align='right'>{row.event}</TableCell>
                <TableCell align='right'>{row.day}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
                <TableCell align='right'>{row.time}</TableCell>
                <TableCell align='right'>{row.venue}</TableCell>
                <TableCell align='right'>{row.attendees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
