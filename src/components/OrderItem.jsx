import styles from './OrderItem.module.css'

export function OrderItem({item}){

    const subTotal = item.quantity * item.price;

    const {category, quantity,price} = item
    return (
         <div className={styles.orderProperties}>
            <img src={item.image.thumbnail} className={styles.orderImage} alt=""/>
            <div>      
                <p className={styles.itemName}>{category}</p>
                <div className={styles.itemInfo}>
                    <p className={styles.itemDetails} >
                        <span className={styles.quantity}>{quantity}x </span> 
                        <span className={styles.price}>@ ${price .toFixed(2)} </span>
                        <span className={styles.subPrice}>${subTotal.toFixed(2)} </span> 
                    </p>
                </div>
            </div>  
        </div>
    )
}