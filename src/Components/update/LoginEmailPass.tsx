import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const LoginEmailPass = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex h-screen justify-center">
      <div className="w-full">
         <div className="flex justify-center">
            <img src={logo} alt="/logo" className="w-36 md:w-52 pt-9" />
         </div>
         <div className="flex justify-between items-center border-b-2 border-b-cyan-800">
            <h1 className="text-[14px] xs:text-xl md:text-2xl text-sky-800 font-bold pb-2">RESET PASSWORD</h1>
            <p className="underline text-sky-800 font-bold hover:text-sky-400 duration-150"><Link to='/login'>Back to Login</Link></p>
         </div>
         <div className="w-full border p-12 mt-7">
            <form>
               <p className="pb-4 text-sm text-gray-700">Type your Username to reset your password</p>
               <p className="pb-4 text-sm text-gray-700">Please allow 1 hour for the delivery of the reset e-mail.</p>
               <label className="text-sky-900 text-xl font-bold">
                  E-mail
                  <input 
                     type="email" 
                     name="email"
                     className="border w-full mt-2"
                  />
               </label>
               <button 
                  type="submit"
                  className="bg-sky-800 mt-3 hover:scale-105 duration-150 text-[11px] md:text-[14px]"   
               >
                  RESET PASSWORD
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export default LoginEmailPass;
