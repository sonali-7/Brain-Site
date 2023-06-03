import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parietal from "./pages/ParietalLobe";
import Frontal from "./pages/Store";
import Temporal from "./pages/Temporal";
import Occipital from "./pages/Occipital";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/parietal" exact Component={Parietal} />
        <Route path="/frontal" exact Component={Frontal} />
        <Route path="/temporal" exact Component={Temporal} />
        <Route path="/occipital" exact Component={Occipital} />
       
      </Routes>


    </div>

  );
}

export default App;
