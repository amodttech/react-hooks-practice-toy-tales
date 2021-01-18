import React, {useState} from "react";

function ToyForm({onAddToy}) {
  
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })
  
  function onSubmit(event){
    event.preventDefault()

    const newToy = {
      ...formData,
      likes: 0
    }

    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(onAddToy)
  }

  function onChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={onChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={onChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
