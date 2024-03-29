import React, { Fragment, useState } from 'react';
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meallist from './components/Meal/MealList';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider'; 

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider> 
      <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />} 
        <Header onShowCart={showCartHandler}/>
        <Summary />
        <Meallist />
      </Fragment>
    </CartProvider>
  );
}

export default App;
