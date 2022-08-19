import Nav from "./containers/Nav/Nav";

import { useState, useEffect } from "react";


function App() {
  const [task, setTask] = useState()
  const [taskData,setTaskData] = useState([])
  const [filteredTaskData,setFilteredTaskData] = useState([])


  const setNewTasks = () => {
    setTaskData((oldArray) => [...oldArray, task])
  }


  useEffect(setNewTasks,[task])

  const filterFunction = () => {
    setFilteredTaskData(taskData.filter((task) => {
      return typeof task === "string"
    }))
  }
  

  useEffect(filterFunction,[taskData])

  const renderNewTasks = filteredTaskData.map((task) => {
      return <p>{task}</p>
    })
  





  return (
    <div className="App">
      <Nav setTask = {setTask} taskData= {taskData} setFilteredTaskData = {setFilteredTaskData}/>
      {renderNewTasks}
    </div>
  );
}

export default App;
