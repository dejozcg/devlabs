import { useEffect, useState } from "react";
import { rickAndMortyService } from "../../service/rick-and-morty";
// import { Card } from "../../components/Card"

// const {getAllLocations} = rickAndMortyService;

export const NoviOglas = () => {

   const [name, setName] = useState()
   const [brojtelefona, setBrojtelefona] = useState()
   const [opis, setOpis] = useState()
   const [error, setError] = useState()

   const handleInputChange = (event, setState) => {
      const {
         target: { value },
      } = event;

      setState(value);
   };

   const handleSubmit = async event => {
      event.preventDefault();

      // try {
      //   const body = JSON.stringify({ name, brojtelefona, opis });

      //   const response = await getLoggedInUser(body);
      //   handleUserLogin(response.data.token);
      //   navigate('/');
      // } catch (error) {
      //   console.log(error);
      // }
   };
   // useEffect(() => {
   //    const fatchAllData = async () => {
   //       try{
   //          const result = await getAllLocations()
   //          console.log(result.data);
   //          setData(result.data)
   //       }catch(err){

   //          console.log('Error je ',err.message);
   //          setError(err)
   //       }
   //    }
   //    fatchAllData()
   // },[])

   // if(error)
   // return <div>Error is: {error.message}</div>

   // if(!data)
   // return <div>Error is {error}</div>

   return <>
      <div className="ml-10">
      <h1 className="text-2xl text-green-500 text-center">Add new</h1>
      <form method="post" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
            <input
               className="rounded-sm px-2"
               type="text"
               name="name"
               placeholder="Enter name"
               value={name}
               onChange={event => handleInputChange(event, setName)}
            />
         </div>
         <div className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
            <input
               className="rounded-sm px-2"
               type="text"
               name="brojtelefona"
               placeholder="Enter phone number"
               value={brojtelefona}
               onChange={event => handleInputChange(event, setBrojtelefona)}
            />
                     </div>
         <div className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
            <textarea 
            className="rounded-sm px-2"
            name="opis" 
            cols="30" 
            rows="10"
            placeholder="Enter details"
               value={opis}
               onChange={event => handleInputChange(event, setOpis)}
            >
            </textarea>
         </div>
         <button
            className="block px-2 py-1 bg-green-500 rounded-sm text-white mx-auto"
            type="submit"
         >
            Add
         </button>
      </form>
      </div>
   </>
}
