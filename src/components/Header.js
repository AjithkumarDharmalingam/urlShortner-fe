import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate()
    let handleLogout = async()=>{
        sessionStorage.clear()
        navigate('/login')
    }
  return <>
    <div className='main_container'>
    <nav className='navbar'>
        <h1>URL Shortner</h1>
        <Button variant="danger" onClick={()=>handleLogout()}>Logout</Button>

    </nav>

   </div>
  </>
}

export default Header