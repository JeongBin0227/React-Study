import React from "react";
import Button from "./components/Button";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">button</Button>
        <Button>button</Button>
        <Button size="small">button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          button
        </Button>
        <Button color="gray">button</Button>
        <Button color="gray" size="small">
          button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          button
        </Button>
        <Button color="pink">button</Button>
        <Button color="pink" size="small">
          button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline={true}>
          button
        </Button>
        <Button color="gray" outline={true}>
          button
        </Button>
        <Button color="pink" size="small" outline={true}>
          button
        </Button>
      </div>
      <div className="buttons">
        <Button
          size="large"
          fullwidth={true}
          onClick={() => {
            console.log("마우스 클릭");
          }}
          onMouseMove={() => {
            console.log("마우스 오버");
          }}
        >
          button
        </Button>
        <Button size="large" color="gray" fullwidth={true}>
          button
        </Button>
        <Button color="pink" size="large" fullwidth={true}>
          button
        </Button>
      </div>
    </div>
  );
}

export default App;
