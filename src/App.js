import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary keyword={"serendipity"} />
      </div>
      <footer className="text-center">
        Coded with <span className="emojiColor">♥️</span> by{" "}
        <a href="https://monumental-malasada-41cd9f.netlify.app">
          Mariama Touray
        </a>{" "}
        and is{" "}
        <a href="https://github.com/touraymk/dictionary-react-app">
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
