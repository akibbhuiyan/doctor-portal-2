import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const AppointmentByDate = ({ appointments }) => {
    return (
        <div className='pt-5'>
            <h1 className='text-center text-brand'>Appointments</h1>
            {
                appointments.length ? <TableContainer component={Paper}>
                    <Table sx={{}} aria-label='Appointments table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                appointments.map((row) => (
                                    <TableRow key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component='th' scope='row'>{row.name}</TableCell>
                                        <TableCell align='left'>{row.phoneNumber}</TableCell>
                                        <TableCell align='left'>{row.email}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                    :
                    <div className="pt-5">
                        <h5 className='text-center'>No Appointments</h5>
                    </div>
            }
        </div>
    );
};

export default AppointmentByDate;