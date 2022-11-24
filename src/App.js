import { Profiler, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Productdetails from './components/Productdetails';
import data from './variants'
function App() {
  const {product} = data;
  const [variantItems, setVariantItems] = useState([product])
  const [cartItems, setCartItems] = useState([]);
  const onAdd =(product)=>{
    const exist =cartItems.find(x=>x.id===product.id)
    if(exist){
      setCartItems(
        cartItems.map((item)=>
        item.id ===product.id ?{...exist, quantity: exist.quantity +1}: item 
               )
        );
    }
    else
    {
    setCartItems([...cartItems,{...product, quantity:1}])
  }
  };

  const onRemove =(product)=>{
    const exist = cartItems.find((item)=>item.id===product.id)
    if(exist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id!==product.id))
    }
    else{
      setCartItems(
        cartItems.map((item)=>
        item.id ===product.id ?{...exist, quantity: exist.quantity - 1}: item 
               )
        );
    }
  }
  // const minusVariant(product)=>{
  //   const exist =variantItems.find(((item)=>item.id===product.id) )
  // }
  return (
    <div className="App">
    <Navbar />
    <Productdetails key={product[0].id} onAdd={onAdd} onRemove={onRemove} products= {product} cartItems={cartItems}/>
    {/* <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /> */}
    <Footer/>

    </div>
  );
}
export default App;