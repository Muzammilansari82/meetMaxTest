import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { MyProvider } from './Contexts/MyContext';
import Photos from './Pages/Photos';
import Cart from './Pages/Cart';
import './app.css'
import {CartFill} from 'react-bootstrap-icons'; 

const Head = () =>{
    return (
        <BrowserRouter>
          <MyProvider>
            <header className='center'>
              <Link to="/" className='nav-link'>Pic Some / Items</Link>
              <Link to="/cart" className='nav-link'><button className='btn'><CartFill className='cartfill'/>Cart</button></Link>
            </header>
            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </MyProvider>
        </BrowserRouter>
      );
    }
    
export default Head