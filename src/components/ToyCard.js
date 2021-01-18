import React from "react";

function ToyCard({toy, deleteClick, likeClick}) {
  
  const {id, name, image, likes } = toy

  function onDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => deleteClick(toy))
  }

  function onLike(){
    const newLike = {
      likes: toy.likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLike)
    })
    .then(r => r.json())
    .then(likeClick)
  }
  
  
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={onLike} className="like-btn">Like {"<3"}</button>
      <button onClick={onDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
