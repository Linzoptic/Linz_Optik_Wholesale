import React from 'react';
import Photo from '../../images/Rectangle.svg'

const LoginForm: React.FC = () => {
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
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col max-w-[500px] text-center md:text-left mt-5 md:w-full"
        >
            <label className='text-blue-700'>
                USERNAME
                <input 
                    type="email" 
                    name="email"
                    className='w-full border border-black mt-2 mb-3 p-1 outline-none rounded-md'
                />
            </label>
            <label className='text-blue-700'>
                PASSWORD
                <input 
                  type="password" 
                  name="email"
                  className=' w-full border border-black mt-2 p-1 outline-none rounded-md'
               />
            </label>
            <p className='text-sm mt-1'><a href="#">Forgot your Password?</a></p>
            <button 
               type="submit"
               className='uppercase bg-blue-800 text-white font-bold text-[18px] px-4 py-[8px] mt-3 rounded-md hover:bg-blue-300 hover:text-blue-900 duration-200'   
            >
               login
            </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
