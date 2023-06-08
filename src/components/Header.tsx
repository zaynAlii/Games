"use client"

import Image from 'next/image'

import logo from '../assets/images/logo2.jpeg'
import { FcSearch } from 'react-icons/Fc';

import { RiMoonClearFill } from 'react-icons/Ri';
import { BsSun } from 'react-icons/Bs'
import { useState } from 'react';
export const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='flex dark  items-center md:gap-7 sm:gap-2 justify-center mt-5 '>
           
            <Image
                priority
                src={logo}
                className='w-16 rounded-full  '
                alt='Gaming logo'
                width={400}
                height={400}
            />
            <div className='flex rounded-full bg-white   p-2  '>
                <FcSearch
                    className='px-3 w-10 h-6  '
                />
                <input type="text" className='sm:w-[350px] px-1  text-black outline-none    lg:w-[950px] rounded-full' />
            </div>

            <div className=''>

                <button onClick={toggle ? () => setToggle(false) : () => setToggle(true)}
                    className=''
                >

                    {toggle ? <RiMoonClearFill
                        className='text-4xl text-white  bg-black p-2 rounded-full '
                    /> : <BsSun className='text-4xl bg-white text-black p-2 rounded-full  ' />}

                </button>




            </div>
        </div>
    )
}
