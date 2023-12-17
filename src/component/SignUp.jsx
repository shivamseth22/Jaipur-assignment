import React from 'react';

const SignUp = () => (
  <div className='bg-teal-500 flex justify-center items-center p-6 lg:p-10'>
    <div className='text-white flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 '>
      <p className='text-lg lg:text-2xl font-bold text-center lg:text-left'>
        Sign Up for Your Free 1st Accounting Consultation
      </p>
      <div className='flex flex-col lg:flex-row items-center'>
        <input
          type="text"
          placeholder='Enter email address'
          className='p-2 lg:p-4 border  mb-2 lg:mb-0 '
        />
        <button className='p-2 lg:p-4 bg-blue-500 text-white '>
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default SignUp;
