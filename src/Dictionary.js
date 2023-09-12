import React from "react";
import "./Dictionary.css";
import imageBackground from "./dictionary-bg.jpg";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <img src={imageBackground} className="imageBackground img-fluid" alt="" />
      <header className="p-3">
        <h1 className="text-center">Dictionary</h1>
        <h2>What word would you like to look up</h2>
      </header>
      <main>
        <form>
          <input
            type="search"
            placeholder="Enter word.."
            className="col-6"
            autoFocus={true}
          />
          <button type="submit">🔍</button>
        </form>
      </main>
    </div>
  );
}
