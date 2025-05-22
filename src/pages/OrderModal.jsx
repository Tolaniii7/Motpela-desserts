import { useDishContext } from '../context/DishContext';
import { OrderItem } from '../components/OrderItem';
import styles from './OrderModal.module.css';
import { useNavigate } from 'react-router-dom';


export  function OrderModal() {
 const {  carts, setCart, totalPrice} = useDishContext();

 const navigate = useNavigate();

  

    function startOrder(){ 
        navigate('/'); 
        setCart([]);
        
    }


  return (
 
        
      <div className={styles.orderContainer}>
        <img src='/assets/images/icon-order-confirmed.svg'/>
        <h2 className={styles.header}>Order Confirmed </h2>
        <p className={styles.message} >We hope you enjoy your meal 🎉</p>
        
        <ul className={styles.cartContent}>
            {carts.map((item)=><OrderItem item={item} key={item.name} />)}
        </ul>

          <div className={styles.totalSummary}>
            <p>Order Total</p>
            <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
          </div>

        <div onClick={startOrder} className={styles.startOrder}>Start New Order</div>

        
      </div> 
   
  );
}

 
 