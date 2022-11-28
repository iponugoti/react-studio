import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const addPrice = (price) => {
    setTotalPrice((p) => price + p);
  };

  const addItemToCart = (name, price) => {
    const add = cart.map((c) => {
      if (c.name === name) {
        return {name: c.name, price: c.price, quantity: (c.quantity + 1)};
      }
      else {
        return {name: c.name, price: c.price, quantity: 1};
      }
    });
    setCart(add);
    addPrice(price);
  }


  // const addItemToCart = (name, price) => {
  //   if (cart.includes(name)) {
  //     setCart((c) => [...c, {name: name, price: price, quantity: 2}]);
  //   }
  //   else {
  //     setCart((c) => [...c, {name: name, price: price, quantity: 1}])
  //   };
  //   addPrice(price);
  // };

  return (
    <div className="App">
      <h1>Isha's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <p>
          <BakeryItem name = {item.name} image = {item.image} desc = {item.description} price = {item.price} addToCart = {addItemToCart}/>
        </p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart ({cart.length})</h2>
        {cart.map((item) => (
        <p>
          {item.quantity}x {item.name} ${item.price}
        </p> ))}
        Subtotal: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default App;
