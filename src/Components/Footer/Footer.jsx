import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
  return (
    <>
    <div className='flex bg-black text-white'>
      <div className='flex px-28 m-4 w-[50%] justify-around'>
      <ul>
        <li className='py-1'><Link to="/">Shop</Link></li>
        <li className='py-1'><Link to="/">Stockists</Link></li>
        <li className='py-1'><Link to="/">Blog</Link></li>
        <li className='py-1'><Link to="/">About Us</Link></li>
        <li className='py-1'><Link to="/">Contact</Link></li>
      </ul>
      <ul>
        <li className='py-1'><Link to="/">FAQ</Link></li>
        <li className='py-1'><Link to="/">Shipping & Returns</Link></li>
        <li className='py-1'><Link to="/">Store Policy</Link></li>
        <li className='py-1'><Link to="/">Payment Methods</Link></li>
      </ul>
      </div>
      <div className='flex items-center w-[50%] justify-center '>
        <div>
        <form className='my-6'>
          <label htmlFor="email">Enter your email here*</label><br />
          <input className='w-80 outline-none py-2 bg-transparent border-b-2 border-solid border-white' type="email" name="email" id="email" /> 
          <button className='border border-solid border-white bg-white text-white px-3 py-2 mx-2 hover:bg-transparent hover:text-white duration-300'>SUBSCRIBE</button>
        </form>
        <div className='flex justify-end mx-4 py-10'>
        <Facebook  className='m-2 fill-white size-5'/>
        <Instagram className='m-2 size-5'/>
        <Youtube className='m-2 size-5'/>
        <Twitter className='m-2 fill-white size-5'/>
        </div>
        </div>
      </div>
    </div>
    <div className='bg-[#2E2D2D] text-gray-500 py-4 px-36 text-sm'>
        ©2035 by Raw.etc. Powered and secured by <span className='underline text-blue-600 cursor-pointer'>my</span>
    </div>
    </>
  )
}

export default Footer