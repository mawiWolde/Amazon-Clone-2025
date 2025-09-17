import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Routing from "./Router.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routing>
      <Home />
    </Routing>
  );
}

export default App;
