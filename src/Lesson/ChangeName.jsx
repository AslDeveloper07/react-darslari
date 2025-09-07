import React, { useState } from "react";
import "./../index.css";

const ChangeName = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <form className="form">
        <div className="inp-wrap">
          <span>
            <input
              type="text"
              className="name-inp"
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span>
            <input
              type="date"
              className="date-inp"
              onChange={(e) => setDate(e.target.value)}
            />
          </span>
        </div>
        <p>Name: {name}</p>
        <p>Date: {date}</p>
      </form>
    </div>
  );
};

export default ChangeName;
