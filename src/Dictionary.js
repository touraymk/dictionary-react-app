import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DictionaryExplanation from "./DictionaryExplanation";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [dictionary, setDictionary] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setDictionary({
      ready: true,
      word: response.data.word,
      phonetic: response.data.phonetic,
      partOfSpeech: response.data.meanings[0].partOfSpeech,
      definition: response.data.meanings[0].definition,
      synonyms: response.data.meanings[0].synonyms,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "dc34aa4b26o1f14aa51aea20t25d63c3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (dictionary.ready) {
    return (
      <div className="Dictionary">
        <header className="p-3">
          <h1 className="text-center">Dictionary</h1>
          <h2>What word would you like to look up</h2>
          <form onSubmit={handleSubmit} className="mt-4">
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
        <main className="m-4">
          <DictionaryExplanation data={dictionary} />
        </main>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
