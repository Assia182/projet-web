import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function HandleReservations({currentUser}) {

    const [reservations, setReservations] = React.useState();

const fetchReservations = async () => {
    await axios.get('http://localhost:8000/reservations/all', { withCredentials: true })
    .then((response)=> setReservations(response.data));
};

  React.useEffect(() => {
    fetchReservations();
    }, []);

  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Numéro de réservation</TableCell>
                <TableCell>Email du client</TableCell>
                <TableCell>Date de réservation</TableCell>
                <TableCell>Date de retrait </TableCell>
                <TableCell>Etat de la réservation </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {reservations && reservations.map((reservation) => (
                <TableRow
                key={reservation.idReservation}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {reservation.idReservation}
                </TableCell>
                <TableCell>{reservation.userEmailUser}</TableCell>
                <TableCell>{reservation.dateReservation}</TableCell>
                <TableCell>{reservation.retrieveDate}</TableCell>
                <TableCell>{reservation.reservationStateNameReservationState}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default HandleReservations