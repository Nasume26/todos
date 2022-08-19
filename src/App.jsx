import Nav from "./containers/Nav/Nav";
import TaskCard from "./components/TaskCard/TaskCard";

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
      return <TaskCard taskDT = {task} setTaskData = {setTaskData} setFilteredTaskData = {setFilteredTaskData} taskData= {taskData} filteredTaskData = {filteredTaskData}/>  
    // return <button onClick = {deleteFunction (task)}>{task}</button>
    })
  





  return (
    <div className="App">
      <Nav setTask = {setTask} taskData= {taskData} setFilteredTaskData = {setFilteredTaskData} setTaskData = {setTaskData}/>
      {renderNewTasks}
    </div>
  );
}

export default App;
