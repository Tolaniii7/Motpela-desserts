import { useDishContext } from '../context/DishContext';
import { OrderItem } from './OrderItem';
import styles from './OrderModal.module.css';


export  function OrderModal() {
 const { showModal, carts, setCart, onClose, totalPrice} = useDishContext()


  if (!showModal) return null;

    function startOrder(){
       
        onClose()
        setCart([]);
    }


  return (
    <div className={styles.modalOverlay}>
        
      <div className={styles.modalContent}>
        <img src='/assets/images/icon-order-confirmed.svg'/>
        <h2 className={styles.header}>Order Confirmed </h2>
        <p className={styles.message} >We hope you enjoy your meal 🎉</p>
        
        <ul className={styles.cartContent}>
            {carts.map((item)=><OrderItem item={item} />)}
        </ul>

          <div className={styles.totalSummary}>
            <p>Order Total</p>
            <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
          </div>

        <div onClick={startOrder} className={styles.startOrder}>Start New Order</div>

        
      </div> 
    </div>
  );
}

 
 