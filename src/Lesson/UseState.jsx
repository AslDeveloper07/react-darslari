import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("Asilbek");

  const handleClick = () => {
    setName("Azizbek");
  };

  return (
    <div>
      <h1>Salom mening ismim {name}</h1>
      <button onClick={handleClick}>change name</button>
    </div>
  );
};

export default UseState;
