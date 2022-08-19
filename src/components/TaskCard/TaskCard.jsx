
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
        <button onClick = {deleteFunction}>{taskDT}</button>
    )
}

export default TaskCard