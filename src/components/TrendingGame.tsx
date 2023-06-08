import React from 'react'
import Image from 'next/image'

export const TrendingGame = ({ games }: { games: any }) => {


    return (
        <>
          <h3 className='mt-6 text-3xl bg-gradient-to-r from-cyan-400 to-purple-900 p-3 rounded-md w-[300px]'>Trending Games</h3>
        <div className=' hidden  mt-1 p-3 md:grid md:grid-cols-3 lg:grid-cols-4'>
          
            {games.map((items: any, index: number) => index < 4 && (
                
                <div key={index} className='border-l-4 border-b-2 group cursor-pointer   p-2  border-cyan-400  mx-2 rounded-lg   text-center'>
                    <img
                    className='object-cover group-hover:scale-105  transition-all ease-out duration-300  h-[300px]' 
                    src={items.background_image} alt={items.name} 
                    width={400}
                    height={400}
                    />
                    <h3 className='group-hover:mt-2 transition-all ease-out duration-300'>{items.name}</h3>
                </div>
            ))}

        </div>
            </>
    )
}
