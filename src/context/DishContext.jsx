import { createContext, useContext, useEffect, useState } from "react";

const DishContext = createContext();

function DishProvider({children}){

     const [dishes, setDishes] = useState([])
     const [carts, setCart] = useState([])
    const [loading,setLoading] = useState(true)
 
    useEffect(function(){

        async function fetchDishes() {
            loading;
            try{const res = await fetch(`/data.json`)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                  }
                      const data = await res.json();
                      console.log(data)
                      setDishes(data)
                      setLoading(false)
                  }catch(err){
              console.error('something was wrong with connection', err.message)
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

    
     function handleDelete(name){
        setCart(cart=>cart.filter(item=> item.name !== name))
    }
   

    const totalPrice = carts.reduce((sum, item) => {
        return sum + item.price * item.quantity ;
    }, 0);

    
    return <DishContext.Provider
    value={{
        dishes,
        carts,
        setCart,
        setDishes,
        addToCart, 
        totalPrice,
        handleDelete,
        loading,
    }}>
            {children}
        </DishContext.Provider>

}


function useDishContext (){
    const context = useContext(DishContext)

    return context;
}

export {DishProvider, useDishContext}