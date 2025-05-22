import { Link } from "react-router-dom";
import { useDishContext } from "../context/DishContext";
import { DishList } from "./DishList";
import styles from './Dishes.module.css'
import { Spinner } from "./Spinner";

export function Dishes (){
     const {dishes, loading, carts} = useDishContext();

    return(
    <div >
        <h1 className='header'>Motpela Desserts</h1>
       
        <Link to='/cart' className="link" > <div className='cartLength' > 
            <img src='/assets/images/icon-add-to-cart.svg' alt=""  />
            {carts.length}</div>  </Link>
              

       {loading ? <Spinner/> : <ul className={styles.dishContainer}>
            {dishes.map((dish)=>(<DishList dish ={dish} key={dish.name} />))}
        </ul> }
        
    </div>
    )
}

