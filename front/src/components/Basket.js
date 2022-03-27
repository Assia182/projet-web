import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Basket(props) {
  let navigate = useNavigate();
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.priceProduct, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  function addReservation(){
    const today = new Date();
    const retrieveDate = new Date();
    retrieveDate.setDate(today.getDate() + 3);

    axios({
      method: "POST",
      mode : 'cors',
      url: "http://localhost:8000/reservations/create",
      data: {
        dateReservation : today,
        retrieveDate : retrieveDate,
        userEmailUser : "assia@live.fr"
      },
      withCredentials : true
    }).then(()=>{
      navigate("/confirmation");
    })

  }

  return (
    <aside className="block col-1">
      <h2>Produit(s) du panier</h2>
      <div>
        {cartItems.length === 0 && <div>Panier vide</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.nameProduct}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.priceProduct.toFixed(2)}€
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Prix des produits</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)}€</div>
            </div>
            <div className="row">
              <div className="col-2">Prix des taxes</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)} €</div>
            </div>
            <div className="row">
              <div className="col-2">Prix de livraison</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)} €
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Prix total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}€</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={addReservation}>
                Réserver
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
