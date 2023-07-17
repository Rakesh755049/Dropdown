import Dropdown from "./Dropdown";
import './App.css';
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Select")
  return (
    <div className="App">
    <div className="question"><h3>Should you use a dropdown?</h3></div>
      {/*Costume Dropdown Menu */}
      <Dropdown selected = {selected} setSelected = {setSelected} />
    </div>
  );
}
export default App;
