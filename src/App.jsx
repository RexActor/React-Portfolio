// import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
