import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import Photo from '../../images/Rectangle.svg';

const LoginForm: React.FC = () => {

  const BASE_URL: string = (process.env.REACT_APP_BASE_URL as string);
  const POST_URL: string = (process.env.REACT_APP_POST_URL as string);
  
  const [ username , setUsername ] = useState<string>('');
  const [ userpassword, setUserpassword ] = useState<string>('');
  const [ showpassword, setShowpassword ] = useState<boolean>(false);
  const [ getdata, setGetdata ] = useState<string[]>([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then((data) => setGetdata(data))
      .catch((error) => `<p>Error ${error}<p>`)
    },[setGetdata]);
    
  const formHendler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setUsername('');
    setUserpassword('');

    if(username && userpassword) {
      await axios({
        url: POST_URL,
        headers: {
          "Content-type": "application/json"
        },
        params: {
          username: username,
          password: userpassword
        },
        method: "POST",
      });
    };
  };

  const changeIcon = () => {
    setShowpassword(!showpassword);
  };
    
  return (
    <div className='block text-center md:flex items-center justify-around p-3 border mt-5 rounded-md px-4'>
      <div>
        <img 
            src={Photo} 
            alt="Photo_Logo" 
            className='w-full h-[300px] md:h-[500px] px-2'
         />
      </div>
      <div className='flex md:block justify-center'>
        <form 
          onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}
          className="flex flex-col max-w-[500px] text-center md:text-left mt-5 md:w-full"
        >
          <label>
            <span className='text-blue-700'>USERNAME</span>
            <input 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              value={username}
              type="text" 
              name="email"
              className='w-full border border-black mt-2 mb-3 p-1 outline-none rounded-md'
            />
          </label>
          <label className='relative'>
            <span className='text-blue-700'>PASSWORD</span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserpassword(e.target.value)}
              value={userpassword}
              type={!showpassword ? "password" : 'text' } 
              name="password"
              className='w-full border border-black mt-2 p-1 outline-none rounded-md'
            />
            {!showpassword ?<AiOutlineEye 
              className='absolute right-2 top-10'
              onClick={changeIcon}
            /> : <AiOutlineEyeInvisible 
              className='absolute right-2 top-10'
              onClick={changeIcon}
            />}
          </label>
          <p className='text-sm mt-1 underline hover:no-underline'><Link to="/emailPass">Forgot your Password?</Link></p>
          <button 
            type="button"
            className='uppercase bg-blue-800 text-white font-bold text-[18px] px-4 py-[8px] mt-3 rounded-md hover:bg-blue-300 hover:text-blue-900 duration-200 cursor-pointer'   
            onClick={formHendler}
          >
            login
          </button>
        </form>
      </div>
    </div>
  )
};

export default LoginForm;
