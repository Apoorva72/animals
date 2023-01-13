import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

function getRandomAnimal(){
  const animals = ['dog', 'cat', 'cow', 'gator', 'bird','horse'];

  return animals[Math.floor(Math.random()* animals.length)];
}


function App(){
  const [animals, setAnimals] = useState([]);
   const handleClick = () =>{
    setAnimals ([...animals, getRandomAnimal()])
   }
   const renderedAnimals = animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index} />

   })
   return(
    <div className="app">
      <button onClick={handleClick}>Add animals</button>
      <div>{renderedAnimals}</div>
    </div>
   )
}

 

export default App;