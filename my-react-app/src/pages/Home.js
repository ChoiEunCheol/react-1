import React from "react";
import HelloWorld from "../components/HelloWorld";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Counter />
      </header>
    </div>
  );
};

export default Home;
 