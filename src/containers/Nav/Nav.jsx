import Reset from "../../components/Reset/Reset";
import TaskBar from "../../components/TaskBar/TaskBar";

import { useState, useEffect } from "react";


const Nav = (props) => {
    const { setTask } = props;

    const [input,setInput] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        setTask(input)
        
    }

    const handleInput = (event) => {
        setInput(event.target.value)
        console.log(input)
    }


    return (
        <>
        <h1>My Todos</h1>
        <Reset />
        <TaskBar handleSubmit = {handleSubmit} handleInput = {handleInput} input = {input} />
        </>
    )
};

export default Nav;