import React, { useState, useEffect } from "react";
import "./../index.css";

const ChangeName = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    if (!name || !date) return;

    const newItem = { name, date };
    setList([...list, newItem]);
    setName("");
    setDate("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inp-wrap">
          <span>
            <input
              type="text"
              className="name-inp"
              placeholder="Ism kiriting"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span>
            <input
              type="date"
              className="date-inp"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </span>
        </div>
        <button type="submit">Qo‘shish</button>
      </form>

      <div className="results">
        <h3>Kiritilganlar:</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              Name: {item.name} | Date: {item.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChangeName;
