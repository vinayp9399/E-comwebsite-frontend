import Homepage from './pages/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registrationpage from './pages/registration page';
import Contactpage from './pages/contactpage';
import Productspage from './pages/productspage';
import Loginpage from './pages/loginpage';
import Userlistpage from './pages/userlistpage';
import Cartpage from './pages/cartpage';
import Productdetailspage from './pages/productdetailspage';
import Wishlistpage from './pages/wishlistpage';
import Addproduct from './pages/addproducts';
import Chatbot from './components/Chatbot';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path='/login' element={<Loginpage />} />
          <Route path='/registration' element={<Registrationpage />} />

          {/* Protected routes */}
          <Route path='/' element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path='/addproducts' element={<PrivateRoute><Addproduct /></PrivateRoute>} />
          <Route path='/contact' element={<PrivateRoute><Contactpage /></PrivateRoute>} />
          <Route path='/products/:category' element={<PrivateRoute><Productspage /></PrivateRoute>} />
          <Route path='/products' element={<PrivateRoute><Productspage /></PrivateRoute>} />
          <Route path='/userlist' element={<PrivateRoute><Userlistpage /></PrivateRoute>} />
          <Route path='/cart' element={<PrivateRoute><Cartpage /></PrivateRoute>} />
          <Route path='/wishlist' element={<PrivateRoute><Wishlistpage /></PrivateRoute>} />
          <Route path='/productdetails' element={<PrivateRoute><Productdetailspage /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
      <Chatbot />
    </>
  );
}

export default App;
