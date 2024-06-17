import './css/main.css'
import Homepage from './pages/homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registrationpage from './pages/registration page';
import Contactpage from './pages/contactpage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/registration' element={<Registrationpage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
