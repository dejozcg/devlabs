import { useEffect, useState } from "react";
import { rickAndMortyService } from "../../service/rick-and-morty";
import { Card } from "../../components/Cadr";

const {getAllLocations} = rickAndMortyService;

export const AboutPage = () => {

const [data, setData] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
   const fatchAllData = async () => {
      try{
         const result = await getAllLocations()
         console.log(result.data);
         setData(result.data)
      }catch(err){

         console.log('Error je ',err.message);
         setError(err)
      }
   }
   fatchAllData()
},[])

if(error)
return <div>Error is: {error.message}</div>

if(!data)
return <div>Error is {error}</div>

   return <>
      {/* {JSON.stringify(data.results)} */}
      {/* <div>{JSON.stringify(data.results)}</div> */}
      {/* {data.results.map(({name}) => <div>ime je {name} a url je </div>)} */}
      {/* {data.results.map(({name, status, location}, index) => <Card key={index} name={name} status={status} location={location} />)} */}
      {data.results.map(({name, url}, index) => <div key={index}>ime je {name} a url je {url}</div>)}
 
   </>
}