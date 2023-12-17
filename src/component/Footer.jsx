import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-gray-800 text-white p-8'>
      <div className='w-full lg:w-1/4 order-1 lg:order-none'>
        <h1 className='text-2xl font-bold mb-4'>About</h1>
        <p>
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
      </div>
      <div className='w-full lg:w-1/4 order-2 lg:order-none'>
        <h1 className='text-2xl font-bold mb-4'>Service</h1>
        <p>Market Analysis</p>
        <p>Accounting Advisor</p>
        <p>General Consultancy</p>
        <p>Structured</p>
      </div>
      <div className='w-full lg:w-1/4 order-3 lg:order-none'>
        <h1 className='text-2xl font-bold mb-4'>Service</h1>
        <p>Market Analysis</p>
        <p>Accounting Advisor</p>
        <p>General Consultancy</p>
        <p>Structured</p>
      </div>
      <div className='w-full lg:w-1/4 order-4 lg:order-none'>
        <h1 className='text-2xl font-bold mb-4'>Service</h1>
        <p>Market Analysis</p>
        <p>Accounting Advisor</p>
        <p>General Consultancy</p>
        <p>Structured</p>
      </div>
      <div className='w-full lg:w-1/4 order-5 lg:order-none'>
        <h1 className='text-2xl font-bold mb-4'>FREE CONSULTATION</h1>
        <input type="text" className='mb-2 p-2' placeholder='Your Name' />
        <input type="text" className='mb-2 p-2' placeholder='Your Name' />
        <input type="text" className='mb-2 p-2' placeholder='Your Name' />
        <input type="text" className='mb-2 p-2' placeholder='Your Name' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Send A Message</button>
      </div>
    </div>
  );
};

export default Footer;
