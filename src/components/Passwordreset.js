import React, { useState } from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

function Passwordreset() {
    let [email,setEmail]=useState('')
    let[message,setMessage]=useState(false)
      
    let handleClick=async(e)=>{
      e.preventDefault();
    try {
     let res=await axios.post(`${url}/users/sendpasswordlink`,{email})
     console.log(res)
     if(res.status===201)
     {
    setEmail("")
    setMessage(true)

     }else{
        toast.success(res.data.message)
     }
    } catch (error) {
      toast.error("Invalid User")
    }
  }
  return <>
  <div>
      <Card className='shadow col-lg-6 mx-auto mt-5'>
      <div className='text-center mt-5'>
    <h2>Enter Your Email</h2>
    </div>
    
    {
      message ? <p style={{color:"blue",textAlign:"center",fontWeight:"bold"}}> Password Reset Link Send Successfully in Your Email </p> : ""
    }
    <Form className='p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

    <Button className="col-lg-12" variant="primary"onClick={(e)=>handleClick(e)}>
        Send
      </Button>
    </Form>
    </Card>
    </div>
  </>
}

export default Passwordreset