import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteClick, likeClick}) {

  const toyCards = toys.map((toy) => (
    <ToyCard key={toy.id} toy={toy} deleteClick={deleteClick} likeClick={likeClick}/>
  ))

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
