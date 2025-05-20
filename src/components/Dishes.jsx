import { useDishContext } from "../context/DishContext";
import { DishList } from "./DishList";
import styles from './Dishes.module.css'
import { Spinner } from "./Spinner";

export function Dishes (){
     const {dishes, loading} = useDishContext();

    return(
    <div >

        <div>
            <h1 className={styles.header}>Motpela Desserts</h1> 
        </div>

       {loading ? <Spinner/> : <ul className={styles.dishContainer}>
            {dishes.map((dish)=>(<DishList dish ={dish} />))}
        </ul> }
    </div>
    )
}

