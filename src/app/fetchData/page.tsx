
type tDaata =
  {
    id: number;
    name: string;
    slug: string;
    // games: string;
    image_background: string;
  }
  type ok={
    name:string;
    image:string;
    rating:number;
    reviews_count:number;
    rating_top:number;
    metacritic:number;
  }
const data = async () => {
  let arr: tDaata[] = [];
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
  const re = (await fResponse.json());
  // console.log(re.results);
  arr = re.results.map((ele: any) => ele as tDaata)
  // console.log(arr);
  return arr;
}
data();

const dataGames = async () => {
  // let arr:tDaata[]=[];
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/games?key=${key}`);
  const re = await fResponse.json();
  //  console.log(re.results);
   return re.results;

}



async function dataGamesbyGenre(id: number): Promise<ok[]> {
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=${id}`);
  const response = await fResponse.json();
  const results = response.results as ok[];
  return results;
}


//   async function dataGamesbyGenre (id:number):Promise<any>  {
//   // let arr:tDaata[]=[];
//   const key = 'e287d9764c014a92b46deccf1a1cb6c4';
//   const fResponse = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=${id}`);
//   let re = await fResponse.json()  ;
//    const arr=re.results as ok[]

//    console.log(arr);
//   //  console.log(arr);
//    return re;
// }


// dataGames();

export {dataGamesbyGenre};
export {dataGames};
export default data;