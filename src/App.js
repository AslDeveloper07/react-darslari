import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Asilbek");
  const [events, setEvents] = useState([
    { title: "Asilbek", birthday: 2008, id: 1 },
    { title: "Bexruz", birthday: 2012, id: 2 },
    { title: "Azizbek", birthday: 2010, id: 3 },
  ]);

  const delClick = (id) => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
  };

  const handleClick = () => {
    setName("Bobur");
  };

  return (
    <div className="App">
      <h1>salom mening ismim {name}</h1>
      <button onClick={handleClick} className="bg-orange-600">
        {" "}
        Click me
      </button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => delClick(event.id)} className="">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
