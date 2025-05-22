
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OrderModal } from './pages/OrderModal';
import { Cart } from './components/Cart';

function App() {

  

  return (  
    <Router>
      <Routes>
        <Route index  element={ <HomePage/>} />
        <Route path='/order' element={<OrderModal />} />

        <Route path='/cart' element={<Cart/>} />
      </Routes>   

    </Router>   
  )
}

export default App;

