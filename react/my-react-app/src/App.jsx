import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RickAndMortyCharacters } from './components/RickAndMortyCharacters'
import {Text} from './components/Text'
import {HomePage} from './pages/home'
import { AboutPage } from './pages/about'
import { UsersPage } from './pages/users'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {AppLayout} from './layouts'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const test = 2;
  const name = "Nesto";
  const country = "mne";

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const handlerUserInput = (event)=> {
    // console.log(event.target.value);
    // setInput(event.target.value)
    // setInput(event.target.value.replace('a',''));
    setInput(event.target.value);
    console.log(event.target.value.replaceAll('a',''))
  }

  console.log(test);

  const router = createBrowserRouter([
    {
      path: "", element: <AppLayout />, children: [
        {
          index:true, element: <HomePage />, exact:true
        },
        {
          path: "about",
          children: [{
            index:true, element: <AboutPage />, exact:true
          },{path: "team", element:<h1>Team page</h1>
        }]
        },{path:"users/:id", element: <UsersPage />},
          {path:"*", element:<h1>404 Not Found</h1>}]
    }])

  return (
    <>
    <RouterProvider router={router} />


     {/* <RickAndMortyCharacters/>
      <button onClick={()=>setCount(count+1)}>Click me {count}</button>
      <Text name={name} country={country}/> */}
      {/* <div>
        <h1 className='first-h1' style={{backgroundColor: 'lightcoral', fontSize:24}}>Ovo je nesto</h1>
        <h2 onClick={()=> console.log('Cao')} style={{fontStyle:'italic'}}>{name}</h2>
        <p dangerouslySetInnerHTML={{__html:'<b>dangerous</b>'}}></p>  
        {/* Dangereus se koristi u situacijama kada backend vrati HTML 
      </div> */}
      {/* <input type="text" onInput={handlerUserInput} value={input}/> */}

    </>
  )
}

export default App

