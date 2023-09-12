import { useEffect, useState } from "react";
import { Card } from "../../components/Cadr";
import { rickAndMortyService } from "../../service/rick-and-morty"

const {getAllCharacters} = rickAndMortyService;

// console.log(getAllCharacters)

export const HomePage = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await getAllCharacters()
                console.log(result.data);
                setData(result.data)
            }catch (err){
                setError(err);
            }
        }
        fetchAllData()
    },[])

    if(error)
        return <div>Error is: {error.message}</div>
    
    if(!data)
        return <div>Error is {error}</div>

    return <>
        {data.results.map(({name, status, image, location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url} />)}
    </>
}
