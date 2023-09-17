import React from "react";
import "./DictionaryExplanation.css";

export default function DictionaryExplanation(props) {
  return (
    <div
      className="DictionaryExplanation p-4"
      style={{ textTransform: "capitalize" }}
    >
      <h3>{props.data.word}</h3>
      <h4>/{props.data.phonetic}/</h4>
      <p>{props.data.partOfSpeech}</p>
      <p>{props.data.definition}</p>
      <p>{props.data.synonyms}</p>
    </div>
  );
}
