import React from 'react'
import './Confirmation.css'

function ConfirmationReservation({currentUser}) {
  return (
    <div>
        <div>
          
        <h2 style={{textAlign: "center"}}>Réservation confirmée</h2>
        <img src="images/validation.png" style={{alignContent: "center"}} className="photo"/>
        <p style={{textAlign: "center"}}>
        <a href="/accueil">Retourner à la boutique</a>
        </p>
        
      </div>
        
    </div>
  )
}

export default ConfirmationReservation