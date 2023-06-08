import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import data from '@/app/fetchData/page'
type tDaata =
    {
        id: number;
        name: string;
        slug: string;
        // games: string;
        image_background: string;
    }
    // let dataaa:tDaata={
    //     id: 0,
    //     name: "",
    //     slug: "",
    //     games: "",
    //     image_background: ""
    // }
export const GeneraList = ({setgenreid,returnnamee}:{setgenreid:any,returnnamee:any}) => {
    let tDarr:tDaata[]=[];
    let index:number=-1
    const [activeIndex,setActive]=useState(index);
    const [detarr, setdetarr] = useState(tDarr);
    useEffect(
        () => {
            data().then((deta) => {
                  setdetarr(deta);
            });

        },
        []
    )
    // console.log(detarr);
    return (
        <div>
            <h2 className='px-14  mb-6' > Genera </h2>
            {detarr.map((ele,index) =>
                // <>
                    <div  key={index}
                      onClick={()=>{setActive(index); setgenreid(ele.id); returnnamee(ele.name)}}
                    className={`flex items-center gap-3  hover:bg-gray-500  p-3  group rounded-lg ${activeIndex===index?'bg-gray-500 text-black font-bold  ':null} `}>
                        
                            <img
                            key={index+1} 
                            src={ele.image_background} 
                            alt="img" 
                            width={400}
                            height={400}
                            className={`ml-14 w-10  h-10 object-cover rounded-lg group-hover:scale-125
                            transition-all ease-out duration-500   ${activeIndex===index?'scale-150     ':null}`} />
                        
                        <h4  key={index+2} className={` group-hover:font-bold transition-all ease-out duration-300  ${activeIndex===index?'font-bold text-xl text-cyan-300     ':null}`}> {ele.name} </h4>
                    </div>
                // </>
            )}
        </div>
    )
}
