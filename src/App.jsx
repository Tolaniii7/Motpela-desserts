import { useEffect, useState } from 'react';

import './index.css'
import { Dishes } from './components/Dishes';
import { Cart } from './components/Cart';

function App() {
  const [dishes, setDishes] = useState([])
  const [cart, setCart] = useState([])

  

  useEffect(function(){
      async function fetchDishes() {
      try{const res = await fetch(`/data.json`)
        if (!res.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await res.json();

        console.log(data)
        setDishes(data)
    }catch(err){
      console.error('somethin wass wrong with connection', err.message)
    }
    }
    fetchDishes();
  }, []);


  function addToCart(dish) {
    setCart(cart => {
      const exists = cart.find(item => item.name === dish.name);
      if (exists) {
         return cart.map(item =>
          item.name === dish.name
            ? { ...item , quantity: (item.quantity || 1) + 1}
            : item
        );
      } else {
        return  [...cart, { ...dish, quantity: 1 }];
      }

      
    });
  }


  return (
    <main>
     
      <Dishes dishes ={dishes} setCart={setCart} carts = {cart} addToCart={addToCart}/>
      <Cart carts={cart } setCart={setCart}   />
            

    </main>

  )
}

export default App;

