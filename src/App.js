import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import { Image } from "./components/Image";

function App() {
  return (
    <div className="app__container">
      <Image />
      <CardList />

    </div>
  );
}

export default App;
