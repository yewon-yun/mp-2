import DogBreeds from "./components/DogBreeds.tsx";
import {useEffect, useState} from 'react'
import styled from "styled-components";
import type {Dog} from "./interfaces/Dogs.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

export default function App() { //function returning markup is a component

  const[data, setData]=useState<Dog[]>([]); //first variable is x, then second variable needs to be setX

  useEffect(()=>{
    async function fetchData(){
      const rawData = await fetch("https://dogapi.dog/api/v2/breeds");
      const {data}: {data: Dog[]} = await rawData.json();
      setData(data);
    }
    fetchData()
        .then(()=>console.log("yay"))
        .catch((e)=>console.log("This error occurred: "+e))
  },[data.length]);

  return (
    <ParentDiv>
      <DogBreeds data={data}/>
    </ParentDiv>
  )
}