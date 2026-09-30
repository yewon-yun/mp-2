import styled from "styled-components";
import type {Dog} from "../interfaces/Dogs.ts";


const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightsteelblue;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: black;
    border: 3px black solid;
    border-radius: 10px;
    font: small-caps bold calc(2px + 1vw) "Andale Mono", fantasy;
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
                        <img src={char.attributes.images[1].url} alt={`image of ${char.attributes.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}