
import './index.css'
import { Dishes } from './components/Dishes';
import { Cart } from './components/Cart';
import { useDishContext } from './context/DishContext';

function App() {

  const {carts} = useDishContext()

  return (
    <main>
      <div className='cartLength'>
         <img src='/assets/images/icon-add-to-cart.svg'/> {carts.length}
      </div>
        <Dishes />
        <Cart  />         
    </main>

  )
}

export default App;

