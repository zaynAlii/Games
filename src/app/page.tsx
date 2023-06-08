"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { GeneraList } from '@/components/GeneraList';
import Data from './fetchData/page';
import { dataGames } from '@/app/fetchData/page'
import { Banner } from '@/components/Banner';
import { GiCrystalBars } from 'react-icons/Gi'
import { TrendingGame } from '@/components/TrendingGame';
import { dataGamesbyGenre } from './fetchData/page';
import {GiSplitCross} from 'react-icons/Gi'
import { PopulerGames } from '@/components/PopulerGames';
export default function Home() {
  // let genreidGames: any = []
  const [name, setName] = useState("");
  const [showG, setG] = useState("hidden ");
  const [gamelistbyGenreId, setgamelistbyGenreId] = useState([]);
  const [gamelist, setGList] = useState([]);

  let randNum = Math.floor(Math.random() * gamelist.length);

  useEffect(() => {
    getGames();
    getGamesbyGenreID(4);

  }, [])

  const showGenre = () => {
    setG("block z-30 ");
  }
  const turnback = () => {
    setG("hidden");
  }
  const getGames = () => {
    dataGames().then((data) =>
      setGList(data)
    )
  }
  const setname = (name: string) => {
    setName(name);
  }
  const getGamesbyGenreID = (id: number = 4) => {
    dataGamesbyGenre(id).then(data => setgamelistbyGenreId(data))
  }
  return (
    <div className=' text-white  mt-7   '>
      <GiCrystalBars
        onClick={showGenre}
        className=' absolute top-10 left-14   block md:hidden   text-3xl'
      />
      <div className='grid grid-cols-4 gap-2  '>
        <div className={` sm:absolute   bg-gradient-to-t from-purple-800 via-cyan-300 to-green-950   sm:${showG} md:relative  md:bg-none   md:block  `}>
        <GiSplitCross 
        className='relative block  md:hidden  left-60 text-black text-4xl top-2'
        onClick={turnback}
        />
          {gamelist.length > 0 &&   <GeneraList setgenreid={(id: number) => getGamesbyGenreID(id)} returnnamee={(nam: string) => setname(nam)} />}
        </div>
        <div className=' sm:col-span-4  md:col-span-3'>
          {gamelist.length > 0 && <Banner gameB={gamelist[randNum]} />}
          {/* <GamesShow/> */}
          <div>
            {gamelist.length > 0 && gamelistbyGenreId.length > 0 && (<div>
              <TrendingGame games={gamelist} />
              <PopulerGames gamebyGenre={gamelistbyGenreId} printName={name} />
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
