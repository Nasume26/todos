import Nav from "./containers/Nav/Nav";

import { useState, useEffect } from "react";


function App() {
  const [task, setTask] = useState("")



  return (
    <div className="App">
      <Nav setTask = {setTask}/>
    </div>
  );
}

export default App;
