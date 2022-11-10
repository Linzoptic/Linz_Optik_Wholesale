import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Photo from "../../images/Rectangle.svg";

const LoginForm: React.FC = () => {

  const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

  const Home:string = "home"; 
  
  const navigate = useNavigate();
  console.log(navigate);
  
  const [username, setUsername] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");
  const [showpassword, setShowpassword] = useState<boolean>(false);

  
  
  const formHendler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername("");
    setUserpassword("");
    
    const resoult = await axios.post(BASE_URL,
      JSON.stringify({
        username: username,
        password: userpassword,
      })
      );
      localStorage.setItem("jwt_token", resoult.data.jwt_token);
      
      if(resoult) {
        navigate(`/${Home}`);
      };
    };
    
    const changeIcon = ():void => {
      setShowpassword(!showpassword);
    }; 
    
    return (
    <div className="block text-center md:flex items-center justify-around p-3 border mt-5 rounded-md px-4">
      <div>
        <img
          src={Photo}
          alt="Photo_Logo"
          className="w-full h-[300px] md:h-[500px] px-2"
          />
      </div>
      <div className="flex md:block justify-center">
        <form
          className="flex flex-col max-w-[500px] text-center md:text-left mt-5 md:w-full"
          onSubmit={formHendler}
          >
          <label>
            <span className="text-blue-700">USERNAME</span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              value={username}
              type="text"
              name="text"
              className="w-full border border-black mt-2 mb-3 p-1 outline-none rounded-md"
              />
          </label>
          <label className="relative">
            <span className="text-blue-700">PASSWORD</span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserpassword(e.target.value)
              }
              value={userpassword}
              type={!showpassword ? "password" : "text"}
              name="password"
              className="w-full border border-black mt-2 p-1 outline-none rounded-md"
            />
            {!showpassword ? (
              <AiOutlineEye
                className="absolute right-2 top-10"
                onClick={changeIcon}
                />
                ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-10"
                onClick={changeIcon}
                />
                )}
          </label>
          <p className="text-sm mt-1 underline hover:no-underline">
            <Link to="/emailPass">Forgot your Password?</Link>
          </p>
          <button
            type="submit"
            className="uppercase bg-blue-800 text-white font-bold text-[18px] px-4 py-[8px] mt-3 rounded-md hover:bg-blue-300 hover:text-blue-900 duration-200 cursor-pointer"
            >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
