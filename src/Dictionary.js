import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import imageBackground from "./dictionary-bg.jpg";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <img src={imageBackground} className="imageBackground img-fluid" alt="" />
      <header className="p-3">
        <h1 className="text-center">Dictionary</h1>
        <h2>What word would you like to look up</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter word.."
            className="col-6"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="submit">🔍</button>
        </form>
      </main>
    </div>
  );
}
