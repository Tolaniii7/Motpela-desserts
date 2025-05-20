import { DishList } from "./DishList";
import styles from './Dishes.module.css'

export function Dishes ({dishes, setCart,carts, addToCart}){
    return(
    <div >
        <header>Motpela Desserts</header> 

        <ul className={styles.dishContainer}>
            {dishes.map((dish)=>(<DishList dish ={dish} setCart={setCart} carts ={carts} addToCart={addToCart} />))}
        </ul>
    </div>
    )
}

