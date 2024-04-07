//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login/Login';
import Home from './heme/Home';

function App() {

  return (
   <BrowserRouter>
     <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>

     </Routes>
   </BrowserRouter>
  );
}

export default App
