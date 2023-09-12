import { useEffect, useState } from "react"
import { Card } from "./Cadr"
import {ThemeSwitcher} from "./themeSwitcher"

export const RickAndMortyCharacters = ()=> {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    const [disabled, setDisabled] = useState(true)

    const handleFetchCharacters = async () => {
        try{
            // const response = await fetch ("https://rickandmortyapi.com/api/character")
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json();

            setCharacters(data.results);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchCharacters()
    }, [page])

    useEffect(() => {
        console.log("PAGE: ", page)
        // handleFetchCharacters()
    }, [page])

    const handlePageChange = (currPage) => {
        if(currPage>0) setPage(currPage)
        setDisabled(currPage == 1)
    }

    return <>
         <ThemeSwitcher /> 
        <button disabled={disabled} onClick={()=>{handlePageChange(page-1)}}>PREV</button>
        <button onClick={()=>{handlePageChange(page+1)}}>NEXT</button>
        {characters.map(({name, status, image, location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url} />)}
    </>
}
