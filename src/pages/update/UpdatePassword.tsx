import React from 'react';
import { Link } from 'react-router-dom';

const UpdatePassword: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <h1><Link to='/login'>Go Back</Link></h1>  
      <div className='w-full flex justify-center items-center'>
         <form>
            <input 
               type="password" 
               placeholder='New Password'
            />
            <input 
               type="password" 
               placeholder='Confirm Password'
            />
            <button
               // className='px-4 py-1 bg-blue-800'
            >
               Update Password
            </button>
         </form>
      </div>
    </div>
  )
};

export default UpdatePassword;
