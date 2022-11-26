import "./App.css";
// import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

// bakeryData.forEach((item) => {
//   item.image = "iponugoti.github.io/react-studio/" + item.image;
// });

/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  // const [cart, setCart] = useState(0);  

  return (
    <div className="App">
      <h1>Isha's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <p>
          <BakeryItem name = {item.name} image = {item.image}/>
        </p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
