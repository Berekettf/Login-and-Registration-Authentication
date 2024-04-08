import React, {useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()
   //beka


const handleSubmit =(e)=>{
   e.preventDefault()
   axios.post('http://localhost:3001/login',{email,password})
   .then(result=>{
    console.log(result)
    if(result.data==="seccess"){
       navigate('/home')
    }
    
    })
   .catch(err=>console.log(err))
}
  return (
    <div className='authcontainer'>
      <div className='wrapper'>
        <h1>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
           <input placeholder='Email' type="text" className="reg-input" onChange={(e)=>setEmail(e.target.value)}/>
           <input placeholder='Password' type="text" className="reg-input" onChange={(e)=>setPassword(e.target.value)} />
           <span className='forgot'>Forgot Password ?</span>
           <button  className='reg-log-btn'>Log In</button>
           <p>Create new Account</p>
        </form>
      </div>
      
    </div>
  )
}

export default Login


