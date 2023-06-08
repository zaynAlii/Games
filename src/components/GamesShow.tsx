

import React from 'react'
import { dataGames } from '@/app/fetchData/page'
export const GamesShow = () => {
    dataGames().then((data)=>
        console.log(data)
    )

  return (
    <div>GamesShow</div>
  )
}
