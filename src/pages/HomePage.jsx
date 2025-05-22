import { Link } from "react-router-dom"
import { Cart } from "../components/Cart"
import { Dishes } from "../components/Dishes"
import { useDishContext } from "../context/DishContext"

export function HomePage(){
      const {carts} = useDishContext()


    return(
     <main>
       <Link to='/cart' className="link" > <div className='cartLength'> 
            <img src='/assets/images/icon-add-to-cart.svg'/> {carts.length}
        </div>
        </Link>
        <Dishes />
        <Cart  /> 
                
</main>
    )
}