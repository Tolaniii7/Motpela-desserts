import { useState } from 'react';
import styles from './Cart.module.css'

import { CartItem } from './CartItem'
import { EmptyCart } from './EmptyCart'
import { OrderModal } from './OrderModal';


export function Cart ({carts, setCart}){

      const [showModal, setShowModal] = useState(false)


    const totalPrice = carts.reduce((sum, item) => {
        return sum + item.price * item.quantity ;
    }, 0);

    function handleOrder (){
        
        setShowModal(true);
    }

    function onClose(){
       setShowModal(false)
    }


    return(
     
        <div className={styles.cartContainer}>

            <h1 className={styles.cartHeader}>Your Cart ({carts.length})</h1>
            <div className={styles.cartContent}>
              { carts.length === 0 ?  (
                <EmptyCart />
            ) :
                 (
                    carts.map(item=> (
                    <CartItem item={item} setCart={setCart} cart={carts} />
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

                  <div onClick={handleOrder} className={styles.confirmOrder}>
                       Confirm Order
                   </div>
                   </>)
                 }
                    <OrderModal  show={showModal} 
                       close={onClose}
                        carts ={carts}
                        setCart={setCart}
                    />

        </div>
    )
}