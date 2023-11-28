import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default NameForm;