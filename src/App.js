import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-body">
          <Weather />
          <p>
            coded by Bandisile Mazomba and is open sourced on {""}
            <a
              className="App-link"
              href="https://github.com/BanzEM/weather-react.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
//#282c34
