import Homepage from './pages/homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registrationpage from './pages/registration page';
import Contactpage from './pages/contactpage';
import Productspage from './pages/productspage';
import Loginpage from './pages/loginpage';
import Userlistpage from './pages/userlistpage';
import Cartpage from './pages/cartpage';
import Productdetailspage from './pages/productdetailspage';
import Wishlistpage from './pages/wishlistpage';
import Addproduct from './pages/addproducts';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/addproducts' element={<Addproduct/>}/>
            <Route path='/registration' element={<Registrationpage/>}/>
            <Route path='/login' element={<Loginpage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
            <Route path='/products/:category' element={<Productspage/>}/>
            <Route path='/products' element={<Productspage/>}/>
            <Route path='/userlist' element={<Userlistpage/>}/>
            <Route path='/cart' element={<Cartpage/>}/>
            <Route path='/wishlist' element={<Wishlistpage/>}/>
            <Route path='/productdetails' element={<Productdetailspage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
