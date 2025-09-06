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

  return (
    <div>
      {event.map((item, i) => (
        <div key={i}>
          <h2>Name: {item.names}</h2>
          <h4>Job: {item.job}</h4>
          <p>Age: {item.age}</p>
          <button onClick={() => handleDelete(i)}>{item.btn}</button>
        </div>
      ))}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus culpa
        recusandae tempore sint laborum et quod, inventore accusantium quasi
        cumque ratione beatae. A optio consectetur deleniti exercitationem
        voluptatum sit voluptatem? Eum modi alias deserunt recusandae a harum
        nisi, molestias quaerat pariatur dolor eligendi voluptatum eveniet quia
        vel vitae esse perferendis quod ducimus. Rem repudiandae modi esse
        reiciendis ipsam incidunt distinctio tenetur, ea unde porro dolores
        assumenda dolorem deleniti? Repudiandae dolorem aspernatur blanditiis
        labore cumque. Blanditiis dolorem eius quaerat amet rem hic corrupti
        accusantium, harum vitae ut accusamus recusandae porro nobis possimus,
        fugit impedit natus! Rem porro molestiae ipsum neque! Doloribus sunt non
        deleniti porro nesciunt sint eveniet, et commodi obcaecati illo
        repellendus fuga, nobis deserunt repellat itaque repudiandae! Sit, autem
        temporibus. Dolorum debitis blanditiis veritatis et accusamus non autem
        beatae ex, natus aliquam est molestiae dolore omnis perferendis cumque,
        illum recusandae sint eum? Beatae saepe dicta quibusdam at. Eos tenetur
        hic vel soluta perspiciatis asperiores accusamus nisi eaque, esse odio,
        aliquid dolor minima ab error corporis. Quae architecto molestias rerum,
        aliquam distinctio ut voluptatum. Tempora porro mollitia ad aut ratione
        quae commodi earum molestias! Ut blanditiis, incidunt nemo neque,
        possimus nulla rem odio sint necessitatibus praesentium ad quasi?
        Tempore, dolore?
      </p>
    </div>
  );
};

export default UseStateProject;
