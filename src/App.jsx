// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="home" element={<Home />} /> */}
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
