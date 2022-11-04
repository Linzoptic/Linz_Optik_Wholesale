import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { BsCheck2All, BsEmojiSmile } from 'react-icons/bs';
import { isMatchPassword } from './utils';
import logo from '../../images/logo.svg';

const UpdatePassword: React.FC = () => {

   const [ typechange, setTypechange] = useState<boolean>(true);
   const [ openErrorDiv, setOpenErrorDiv] = useState<boolean>(false);
   const [ password1, setPassword1 ] = useState<string>('');
   const [ password2, setPassword2 ] = useState<string>('');

   const clickHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(password1 === password2) {
         setOpenErrorDiv(false);
         setPassword1('');
         setPassword2('');
      }
      else if(password1 !== password2) {
         setOpenErrorDiv(true);
      }
   };

  return (
   <div className='max-w-full h-auto flex justify-center items-center'>
      <div className='mx-auto'>
         <div className='w-full flex flex-col justify-center items-center'>
            <div >
               <img 
                  src={logo} 
                  alt="/logo" 
                  className='w-40'
               />
            </div>
            <form 
               className={!openErrorDiv ? 'max-w-[500px] p-5 border border-sky-500 rounded-2xl shadow-2xl shadow-neutral-900' : 'max-w-[500px] p-5 border rounded-2xl shadow-2xl border-red-500' }
               onSubmit={clickHandler}
            >
               <h1 className='text-[16px] text-right pb-5 text-sky-700 md:text-xl'>Update Password</h1>
               <label className='relative'>
                  <input 
                     type={typechange ? "password" : "text"} 
                     value={password1}
                     placeholder='New Password'
                     name='password1'
                     className={!openErrorDiv ? 'w-full outline-none border-sky-500' : 'w-full outline-none border-red-500'}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword1(e.target.value)}
                  />
               {!typechange ?  <AiOutlineEyeInvisible
                     className='absolute top-0 right-2 '
                     onClick={() => setTypechange(!typechange)}
                     /> : 
                     <AiOutlineEye
                     className='absolute top-0 right-2'
                     onClick={() => setTypechange(!typechange)}
                  />}
               </label>
               <label className='relative'>
                  <input 
                     type={typechange ? "password" : "text"} 
                     value={password2}
                     placeholder='Confirm Password'
                     name='password2'
                     className={!openErrorDiv ? 'w-full outline-none border-sky-500 my-6' : 'w-full my-6 outline-none border-red-500'}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}
                  />
               {!typechange ?  <AiOutlineEyeInvisible
                     className='absolute top-0 right-2 '
                     onClick={(e) => setTypechange(!typechange)}
                     /> : 
                     <AiOutlineEye
                     className='absolute top-0 right-2 '
                     onClick={(e) => setTypechange(!typechange)}
                     />}
               </label>
              <div className='block max-w-[500px] px-4 md:flex justify-between'>
                  <button
                     type='submit'
                     className='w-52 bg-sky-700 hover:scale-105 duration-300 text-[16px] md:text-xl'
                  >
                     Update Password
                  </button>
                  <div className={isMatchPassword(password1,password2) ? 'text-green-700 flex items-center' : 'hidden'}>
                     <BsCheck2All size={18}/>
                     <h1 className="text-[14px] px-[3px] py-2">Greate</h1>
                     <BsEmojiSmile size={18}/>
                  </div>
              </div>
               <div className={openErrorDiv ? "text-red-700 text-center pt-3" : "hidden"}>
                  <h1 className='text-xl'>*Please enter the correct password*</h1>
               </div>
            </form> 
            <h1 className='px-[6px] py-[3px] bg-sky-800 my-12 text-white text-[12px] rounded-md  shadow-xl shadow-neutral-900 hover:scale-110 duration-300'><Link to='/login'>Go Back</Link></h1>  
         </div>
      </div>
   </div>
  );
};

export default UpdatePassword;
