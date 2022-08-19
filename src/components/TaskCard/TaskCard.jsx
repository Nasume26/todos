
const TaskCard = (props) => {
    const { taskDT, setTaskData, setFilteredTaskData, taskData, filteredTaskData } = props;

    const deleteFunction = () => {
        console.log(taskDT)
        setTaskData(taskData.filter((task) => {
          return task !== taskDT
        }))
        setFilteredTaskData(filteredTaskData.filter((task) => {
          return task !== taskDT
        }))
        
      }

    return (
        <div>
            <h1>{taskDT}</h1>
            <button onClick = {deleteFunction}>DELETE</button>
        </div>
    )
}

export default TaskCard