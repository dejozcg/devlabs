import { useEffect, useState } from "react";
import { Card } from "../../components/Card"
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
     <h1 className="text-2xl text-green-500 text-center">All ads</h1>
     <div className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
        {/* {data.results.map(({name, brtelefona, opis}, index) => <Card key={index} name={name} brtelefona={brtelefona} opis={opis} />)} */}
        {<Card name={"Prodajem plac"} brtelefona={"06734235235"} opis={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem quidem vitae, quaerat quia dicta voluptatem dolor est ab illum aut similique! Ullam molestias suscipit hic, eos expedita ratione aliquam."} />}
     </div>
    </>
}