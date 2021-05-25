import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Basket from './Component/Basket';
import data from './data'
import { useState } from 'react';
function App() {
  const {products} = data;
  const[cartItems,SetCartItems] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id)
    if(exist){
      SetCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x))
    }else{
      SetCartItems([...cartItems,{...product, qty:1}])
    }
  }
  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      SetCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      SetCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))
    }
  }
  return (
    <div className="App">
      <Header countCartItems = {cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products ={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
