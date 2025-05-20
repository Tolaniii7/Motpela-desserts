import { useDishContext } from '../context/DishContext';
import styles from './DishList.module.css'

export function DishList ({dish}){

  const { setCart,carts, addToCart} = useDishContext();

    const {image, name, price, category} = dish
    const isInCart = carts.find(item => item.name === dish.name);


    function increaseCart(name){
      setCart(cart=> cart.map(item => item.name === name ?
         {...item, quantity: item.quantity + 1}
        : item
       ))
      
    }


    function decreaseCart(name){
       setCart(cart=> 
        cart.map(item => item.name === name  && item.quantity > 1
           ?
       {...item, quantity:  item.quantity - 1}
      : item
        ))
  
    }


    return (
         <li className={styles.dishList}>
            <div className={styles.imgContainer}>
              <div ><img src={image.mobile}  className={styles.dishImg} alt=''/></div>
              <button onClick={()=> {if(!isInCart) addToCart(dish)}}>
                {isInCart ? (
                    <div className={styles.quantity}>
                      <p onClick={()=>increaseCart(name)}>+</p>
                      <p onClick={()=>decreaseCart(name)}>-</p>
                    </div>
                    ) :
                     (
                     <>
                      <img src='/assets/images/icon-add-to-cart.svg'/>
                      <span>Add to Cart</span>
                     </>
                   ) } 
              </button>
            </div>
            <p className={styles.dishName}>{category}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>${price.toFixed(2)}</p>
        </li>
    )
}