import { useState } from "react";
import reactLogo from "/react.svg";
import jslogo from "/typescript logo.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src={jslogo} className="logo typescript" alt="TypeScript logo" />
        </a>
      </div>
      <h1>Martin Ortiz Portfolio</h1>
      <h2>Hi! This is my first page...</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Source code at{" "}
          <a href="https://github.com/martinchoortiz/martin-portfolio-ts">
            https://github.com/martinchoortiz/martin-portfolio-ts
          </a>
        </p>
      </div>
      <p className="read-the-docs">Developed using Vite + React + TypeScript</p>
    </>
  );
}

export default App;
