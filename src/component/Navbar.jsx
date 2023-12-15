import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-5 '>
        <div className='text-4xl font-bold'>
            Accounting
        </div>
        <ul className='font-bold flex gap-7'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CASE STUDY</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
        <div>
            <input type="text" placeholder="Search" className='border-gray border-[1px] p-2 '/>


        </div>
    </div>
  )
}

export default Navbar