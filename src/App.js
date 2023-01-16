import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartShown, isCartShown] = useState(false);

  const showCartHandler = () => {
    isCartShown(true);
  }

  const hideCartHandler = () => {
    isCartShown(false);
  }

  return (
    <CartProvider>
      { cartShown && <Cart hideCart={hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
