/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Password from '../../components/Input/Password';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const Signup = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleSignup = async(e) =>{
    e.preventDefault();
   
    if(!name){
      setError("Please Enter Name");
      return;
    }
    if(!validateEmail(email)){
      setError("Please Enter Valid Email Address");
      return;
    }
    if(!password){
      setError("Please Enter Password");
      return;
    }
    setError("")
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 rounded border bg-white px-7 py-10">
          <form action="" onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input 
            type="text" 
            className="input-box"
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}    
            />
            <input 
            type="email" 
            className="input-box"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}    
            />
            <Password 
               value={password}
               onChange={(e)=> setPassword(e.target.value)} 
            />
            { error && <p className="text-red-500 text-sm font-semibold pb-1">{error}</p>}
            <button type="submit" className="btn-primary ">
              SignUp
            </button>
            <p className="text-sm font-bold text-center mt-4">
              Already have a Account !! {""}
              <Link to="/login" className="underline  text-primary">
                Login Now 
              </Link>
            </p>
            </form>
            </div>
            </div>
    </>
  )
}

export default Signup