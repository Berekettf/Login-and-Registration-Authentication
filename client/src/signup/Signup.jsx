import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()


const handleSubmit =(e)=>{
   e.preventDefault()
   axios.post('http://localhost:3001/signup',{name, email,password})
   .then(result=>{console.log(result)
    navigate('/login')
    })
   .catch(err=>console.log(err))
}
  return (
    <div className='authcontainer'>
      <div className='regWrapper'>
        <div className='reg'>
         <div className='regtop'>Register</div>
         <div className='regbuttom'>
          <form className='form' onSubmit={handleSubmit}>
            <input type="text" className="forminput" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" className="forminput" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" className="forminput" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className="reg-btn">Sign Up</button>
            <span className="already">Have already an account?</span>
            <button className="reg-log"> <Link to='/login' className='form-link'>Log In</Link></button>
          </form>
         </div>
         </div>
      </div>
      
    </div>
  )
}

export default Signup

