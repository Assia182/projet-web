export class CreateReservationDto {
    dateReservation: Date;
    retrieveDate: Date;
    userEmailUser: string;
    reservationStateNameReservationState: string = 'En attente';
}
