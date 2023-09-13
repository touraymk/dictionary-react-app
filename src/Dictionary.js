import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import imageBackground from "./dictionary-bg.jpg";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [dictionary, setDictionary] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setDictionary({
      ready: true,
      name: response.data.name,
      phonetic: response.data.phonetic,
      partOfSpeach: response.data.meanings[0].partOfSpeach,
      definition: response.data.definition,
      synonyms: response.data.meanings[0].synonyms,
    });
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "dc34aa4b26o1f14aa51aea20t25d63c3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
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
        <form onSubmit={search} className="mt-4">
          <input
            type="search"
            placeholder="Enter word.."
            className="col-6"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="submit">🔍</button>
        </form>
      </header>
      <main></main>
    </div>
  );
}
