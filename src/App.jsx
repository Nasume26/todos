import Nav from "./containers/Nav/Nav";

import { useState, useEffect } from "react";


function App() {
  const [task, setTask] = useState("")
  const [taskData,setTaskData] = useState([])


  const renderNewTasks = () => {
    setTaskData(taskData.push(task))
    console.log(taskData)
  }

  // useEffect(renderNewTasks [task])



  return (
    <div className="App">
      <Nav setTask = {setTask}/>
    </div>
  );
}

export default App;
