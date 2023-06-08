import React from 'react'

export const Banner = ({ gameB }: { gameB: any }) => {
  return (
    <div className=' w-auto relative'>
     


      <div className='  absolute   bottom-0  p-4 bg-gradient-to-t from-slate-900 to-transparent w-full py-3'>
        <h1 className='text-2xl font-bold mb-1'>{gameB.name}</h1>
        <button className='bg-blue-300 font-bold text-xl p-2 hover:bg-blue-600 transition-all ease-out duration-500 rounded-lg '>Get one</button>

      </div>
      <img src={gameB.background_image} alt="img" className=' h-[450px]    w-full  object-cover rounded-lg border' />
    </div>
  )
}
