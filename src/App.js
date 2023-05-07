import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Passwordreset from './components/Passwordreset';

export const url = 'https://urlshortner-7mpo.onrender.com'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='passwordreset' element={<Passwordreset/>}/>
      <Route exact path='/forgotpassword/:id/:token' element={<Forgotpassword/>}/>
      <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
