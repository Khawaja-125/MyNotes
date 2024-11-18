// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Password from "../../components/Input/Password";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault()

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
        <div className="w-96 rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
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
              Login
            </button>
            <p className="text-sm font-bold text-center mt-4">
              Not Registerd Yet !! {""}
              <Link to="/signup" className="underline  text-primary">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;