import Reset from "../../components/Reset/Reset";
import TaskBar from "../../components/TaskBar/TaskBar";

import { useState, useEffect } from "react";


const Nav = (props) => {
    const { setTask, taskData, setFilteredTaskData, setTaskData } = props;

    const [input,setInput] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        setTask(input)
        setInput("")
        
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleReset = () => {
        setFilteredTaskData([])
        setTaskData([])
    }


    return (
        <>
        <h1>My Todos</h1>
        <Reset handleReset= {handleReset}/>
        <TaskBar handleSubmit = {handleSubmit} handleInput = {handleInput} input = {input} />
        </>
    )
};

export default Nav;