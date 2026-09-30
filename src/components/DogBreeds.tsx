import styled from "styled-components";
import type {Dog} from "../interfaces/Dogs.ts";


const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: black;
    color: white;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function DogBreeds(props : { data:Dog[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Dog) =>
                    <SingleCharDiv key={char.id}>
                        <h1>{char.attributes.name}</h1>
                        <p>{char.attributes.description}</p>
                        <img src={char.attributes.images[0].url} alt={`image of ${char.attributes.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}