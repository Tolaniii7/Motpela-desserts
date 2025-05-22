import styles from './Cart.module.css'
import { CartItem } from './CartItem'
import { EmptyCart } from './EmptyCart'

import {  useDishContext } from '../context/DishContext';
import { Link } from 'react-router-dom';


export function Cart (){

    const {carts,totalPrice} = useDishContext()


    return(
     
       <div className={styles.cartContainer}>

           <h1 className={styles.cartHeader}>Your Cart ({carts.length})</h1>
           <div className={styles.cartContent}>
             { carts.length === 0 ?  (
               <EmptyCart />
           ) :
                (
                   carts.map(item=> (
                   <CartItem item={item} key={item.name}  />
               ))
               )}
            </div>

            
           {  carts.length > 0 &&   ( 
               <>
              <div className={styles.totalSummary}>
                  <p>Order Total</p>
                  <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>

               </div>
               
                 <div className={styles.delivery}>
                      <img src='/assets/images/icon-carbon-neutral.svg' alt='' />

                     <p> This is a carbon-neutral delivery </p>
                 </div>

              <Link to='/order' className="link">   
                   <div  className={styles.confirmOrder}>
                      Confirm Order </div>
               </Link>
                  </>)
                 }

                 

        </div>
    )
}