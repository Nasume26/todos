import Nav from "./containers/Nav/Nav";

import { useState, useEffect } from "react";


function App() {
  const [task, setTask] = useState()
  const [taskData,setTaskData] = useState([])


  const setNewTasks = () => {
    setTaskData((oldArray) => [...oldArray, task])
    console.log(taskData)
  }

  let filterNewTasks;

  useEffect(setNewTasks,[task])

  const filterFunction = () => {
    filterNewTasks = taskData.filter((task) => {
      return typeof task === "string" && task
    })
  }
  

  useEffect(filterFunction,[taskData])

  const renderNewTasks = () => {
    filterNewTasks.map((task) => {
      return <p>{task}</p>
    })
  }



  return (
    <div className="App">
      <Nav setTask = {setTask} taskData= {taskData}/>
      {renderNewTasks}
    </div>
  );
}

export default App;
