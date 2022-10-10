import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Photo from '../../images/Rectangle.svg';

const LoginForm: React.FC = () => {

  const [ username , setUsername ] = useState<string>('');
  const [ userpassword, setUserpassword ] = useState<string>('');
  const [ getdata, setGetdata ] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://tiknikstyle.com/wp-json/wp/v2/home_page_texts')
      .then(res => res.json())
      .then((data) => setGetdata(data));
    },[setGetdata])
    console.log(getdata);
  
  const  formHendler = async (event: React.MouseEvent<HTMLButtonElement>) => {

    setUsername('');
    setUserpassword('');

    if(username && userpassword) {
      try {
       await axios({
          url: 'http://tiknikstyle.com/wp-json/wp/v2/users',
          headers: {
            "Content-type": "application/json"
          },
          params: {
            username: username,
            password: userpassword
          },
          method: "POST",
        }).then(({data}) => data);
      } catch (error) {
        return (
          console.log("error>>>>>", error)
        )
      };
    };
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
              type="email" 
              name="email"
              className='w-full border border-black mt-2 mb-3 p-1 outline-none rounded-md'
            />
          </label>
          <label>
            <span className='text-blue-700'>PASSWORD</span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserpassword(e.target.value)}
              value={userpassword}
              type="password" 
              name="password"
              className='w-full border border-black mt-2 p-1 outline-none rounded-md'
            />
          </label>
          <p className='text-sm mt-1'><a href="#">Forgot your Password?</a></p>
          <button 
            type="button"
            disabled={username.length === 0}
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
