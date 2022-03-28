import { useState, useEffect } from 'react';
import React from 'react';
import Shop from './components/Shop'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios'
import ConfirmationReservation from './components/ConfirmationReservation';
import HandleReservations from './components/HandleReservations';
import Login from './components/Login'
import Admin from './components/Admin';

function App() {
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    axios.get('http://localhost:8000/users/current-user', { withCredentials: true })
    .then(response =>{
      setCurrentUser(response.data)
      console.log(response.data)
    }).catch((e) => console.log(e.request))
  }, []);
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.idProduct === product.idProduct);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.idProduct === product.idProduct ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.idProduct === product.idProduct);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.idProduct !== product.idProduct));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.idProduct === product.idProduct ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const fetchProducts = async () => {
    await axios.get('http://localhost:8000/products/all', { withCredentials: true })
    .then((response)=> setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    }, []);

  return (
    <div className="App">

    <Router>
      
      <Routes>

        <Route path="/" element={ <Login />} />

        { currentUser && currentUser.isAdmin === false &&
        <Route path="/accueil" element={
        
          <Shop countCartItems={cartItems.length} products={products} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} currentUser={currentUser}/>

        } />
        }

        { currentUser && currentUser.isAdmin === false &&
          <Route path="/confirmation" element={ <ConfirmationReservation currentUser={currentUser}/>} />
        }

        { currentUser && currentUser.isAdmin === true &&
        <Route path="/accueil" element={
        
         <Admin />

        } />
        }
        

        { currentUser && currentUser.isAdmin === true &&
          <Route path="/liste/reservations" element={ <HandleReservations currentUser={currentUser}/>} />
        }


      </Routes>
      
      </Router>
  

    </div>
  );
}

export default App;
