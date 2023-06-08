import React, { use, useEffect, useState } from 'react'
import Image from 'next/image';
// import {IoIosArrowForward} from 'react-icons/IO';
export const PopulerGames = ({gamebyGenre,printName}:{gamebyGenre:any,printName:string}) => {
      const [Tval,setTval]=useState("0");
      function nextTrans(){
        if (Tval==="0") {
           setTval("1");
        }
        else{
        setTval(1+Tval);
        }
      }
  return (
    <>
    <h3 className='my-3 ml-3 bg-gradient-to-r from-cyan-400 inline-block to-black p-3'>{printName} Games</h3>
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 p-3'>
    {/* <div className='md:flex overflow-hidden '> */}
        {gamebyGenre.map((items:any,index:number)=>
        {
            return <div key={index} className={`text-white  flex-shrink-0  cursor-pointer -translate-x-[${Tval}] sm:w-full  md:w-[300px] border-l-4 border-b-2 rounded-xl border-purple-800 m-2 p-3 group hover:scale-110 transition-all ease-in-out duration-300 `}>
                    <img 
                    className='h-[250px] object-cover sm:w-full ' 
                    src={items.background_image} alt={items.name}
                    width={400}
                    height={400}
                     />
                    <h3 className='my-2 p-2 border rounded-lg inline-block border-green-950 '> {items.name} <span>{items.metacritic} </span></h3>
                    <h4 className='border text-center border-cyan-700 rounded-xl py-2'> <span>✨ {items.rating} </span>🗯️ {items.reviews_count} <span>🔥 {items.rating_top}</span> </h4>
            </div>
        })}
      
         
       {/* <IoIosArrowForward  onClick={nextTrans} className='text-white text-4xl absolute right-[20px] bottom-[-670px] cursor-pointer z-50'/> */}
       {/* -translate-x-0 translate-y-[50%]  */}
    </div>
    </>
  )
}
