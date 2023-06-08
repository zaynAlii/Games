
type tDaata =
  {
    id: number;
    name: string;
    slug: string;
    // games: string;
    image_background: string;
  }
const data = async () => {
  let arr: tDaata[] = [];
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
  const re = (await fResponse.json());
  arr = re.results.map((ele: any) => ele as tDaata)
  return arr;
}

const dataGames = async () => {
  // let arr:tDaata[]=[];
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/games?key=${key}`);
  const re = await fResponse.json();
  //  console.log(re.results);
   return re.results;

}

const dataGamesbyGenre = async (id:number) => {
  // let arr:tDaata[]=[];
  const key = 'e287d9764c014a92b46deccf1a1cb6c4';
  const fResponse = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=${id}`);
  const re = await fResponse.json();
  //  console.log(re.results);
   return re.results;
}


// dataGames();

export {dataGamesbyGenre};
export {dataGames};
export default data;