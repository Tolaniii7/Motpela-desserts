import styles from './CartItem.module.css'
export function CartItem ({item, setCart, cart}){
    const subTotal = item.quantity * item.price;

    const{category,quantity, price,name} = item;
     function handleDelete(name){
        setCart(cart=>cart.filter(item=> item.name !== name))
    }

    
    
    

    return(

     <div>
        <p className={styles.itemName}>{category}</p>
        <div className={styles.itemInfo}>
            <p className={styles.itemDetails} >
                <span className={styles.quantity}>{quantity}x </span> 

                <span className={styles.price}>@ ${price .toFixed(2)} </span>
                <span className={styles.subPrice}>${subTotal.toFixed(2)} </span> 
            </p>

            <div className={styles.button} onClick={()=>handleDelete(name)}><img src='/assets/images/icon-remove-item.svg' /></div>
        </div>

         
        
        
     </div>
    )
}