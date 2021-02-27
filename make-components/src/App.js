import logo from "./logo.svg";
import "./App.css";
import "./SelectorBox.css";
import Professor from "./components/Professor/index";
import Restaurant from "./components/Restaurant/index";
import Weather from "./components/Weather/index";

function App() {
  return (
    <div>
      <div className="App">
        <Professor></Professor>
      </div>
      <div>
        <Restaurant></Restaurant>
      </div>
      <div>
        <Weather></Weather>
      </div>
    </div>
  );
}

export default App;
