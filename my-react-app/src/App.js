import React from "react";
import "./App.css";

// import NameForm from './components/NameForm';
// import DataFetching from './components/DataFetching';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// function App() {
//   return (
//     <div className = "App">
//       <header className='App-header'>
//         <HelloWorld />
//         <Counter />
//         <NameForm />
//         <DataFetching />
//       </header>
//     </div>
//   )
// }

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
