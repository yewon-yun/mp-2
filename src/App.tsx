import {useEffect, useState} from 'react'

export default function App() { //function returning markup is a component

  const[data, setData]=useState([]); //first variable is x, then second variable needs to be setX

  useEffect(()=>{
    async function fetchData(){
      const rawData = await fetch("https://rickandmortyapi.com/api/character")
      const actualData = await rawData.json();
      setData(actualData)
    }
    fetchData()
        .then(()=>console.log("yay"))
        .catch((e)=>console.log("This error occurred: "+e))
  },[data.length]);

  return (
    <>

    </>
  )
}