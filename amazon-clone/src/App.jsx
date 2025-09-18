import { useState } from "react";
import "./App.css";
import Routing from "./Router.jsx";
import Landing from "./pages/Landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  return <Routing />;
}

export default App;
