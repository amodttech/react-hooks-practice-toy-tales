import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  function addToy(newToy){
    setToys([...toys, newToy])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function deleteClick(toyForDeletion){
    const newToyList = toys.filter((toy) => toy.id !== toyForDeletion.id)
    setToys(newToyList)
  }

  function likeClick(toyToLike){
    const newToyLike = toys.filter((toy) => 
    toy.id === toyToLike.id ? toyToLike : toy
    )
    console.log(newToyLike)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        deleteClick={deleteClick} 
        likeClick={likeClick}
      />
    </>
  );
}

export default App;
