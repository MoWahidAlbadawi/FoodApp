import React, { useState } from 'react'
import './App.css'
//import details cart ordered
import Cart from './components/Cart/Cart'
//import Header component
import Header from './components/Layout/Header'
//import Meals component
import Meals from './components/Meals/Meals'
//import cartprovider for provider context
import {Provider} from 'react-redux';
import { store } from './store'
const  App = ()  => {
  const [showCart , setShowCart] = useState(false);
  function showCartHandler () {
    setShowCart(true);
  }
  function hideCartHandler () {
    setShowCart(false);
  }
  return(
    <Provider store = {store}>
   {showCart && <Cart onCloseCart = {hideCartHandler}/>}
    <Header onShowCart = {showCartHandler}/>
    <Meals />
    </Provider>
  )
}

export default App;