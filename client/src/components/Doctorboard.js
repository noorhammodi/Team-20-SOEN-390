import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, age, sex, weight, lastappointment) {
  return {
    name, age, sex, weight, lastappointment,
  };
}

const rows = [
  createData('John Smith', 5, 6.0, 24, 4.0),
  createData('Sarah Bo', 237, 9.0, 37, 4.3),
  createData('Lori Lo', 262, 16.0, 24, 6.0),
  createData('Mohammed Mo', 305, 3.7, 67, 4.3),
  createData('Ginger Bread', 356, 16.0, 49, 3.9),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const primary = blue;

function Doctorboard() {
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 10, borderRadius: '25px' }}>
            <h1 style={{ color: '#00296B' }}> Your Conditions</h1>

            <Divider
              style={{ background: '#00296B' }}
              variant="middle"
              sx={{ borderBottomWidth: 4 }}
            />

            <h3>Fill out the daily check in for your own good!</h3>

            <br />

            <Button variant="contained" style={{ bottom: 3, left: 300, color: '#00296B !important' }}>
              <Typography style={{ color: '#FFFFFF' }}>Fill </Typography>
              <NavigateNextIcon style={{ color: '#FFFFFF' }} />
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4} color={primary}>
          <Item sx={{ boxShadow: 10, borderRadius: '25px' }}>
            <h1 style={{ color: '#00296B' }}>Your Appointments</h1>
            <Divider
              style={{ background: '#00296B' }}
              variant="middle"
              sx={{ borderBottomWidth: 4 }}
            />
            <h3>No upcoming Appointments</h3>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ boxShadow: 10, borderRadius: '25px' }}>
            <h1 style={{ color: '#00296B' }}> Your Dashboard</h1>

            <Divider
              style={{ background: '#00296B' }}
              variant="middle"
              sx={{ borderBottomWidth: 4 }}
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First and Last name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Sex</TableCell>
                    <TableCell align="right">Weight&nbsp;(g)</TableCell>
                    <TableCell align="right">Last appointment</TableCell>
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
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.sex}</TableCell>
                      <TableCell align="right">{row.weight}</TableCell>
                      <TableCell align="right">{row.lastappointment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" style={{ bottom: -5, left: 500, color: '#00296B !important' }}>
              <Typography style={{ color: '#FFFFFF' }}>More </Typography>
              <NavigateNextIcon style={{ color: '#FFFFFF' }} />
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Container>

  );
}
export default Doctorboard;
