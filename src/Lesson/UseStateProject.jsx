import React, { useState } from "react";

const UseStateProject = () => {
  const [event, setEvent] = useState([
    { names: "Asilbek", job: "Developer", age: "18", btn: "Delete" },
    { names: "Azizbek", job: "school boy", age: "14", btn: "Delete" },
    { names: "Bexruz", job: "school boy", age: "12", btn: "Delete" },
    { names: "Dilnura", job: "school girl", age: "10", btn: "Delete" },
  ]);

  const handleDelete = (id) => {
    const newEvent = event.filter((_, index) => index !== id);
    setEvent(newEvent);
  };

  const clearAll = () => {
    setEvent([]); // hamma elementlarni o‘chirish
  };

  return (
    <div>
      <button onClick={clearAll}>Clear All</button>

      {event.map((item, i) => (
        <div key={i}>
          <h2>Name: {item.names}</h2>
          <h4>Job: {item.job}</h4>
          <p>Age: {item.age}</p>
          <button onClick={() => handleDelete(i)}>{item.btn}</button>
        </div>
      ))}
    </div>
  );
};

export default UseStateProject;
