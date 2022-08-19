

const TaskBar = (props) => {
    const {handleSubmit, handleInput, input} = props;


    return (
        <>
        <form onSubmit = {handleSubmit}>
            <input 
            value={input}
            onInput={handleInput}>
            </input>
            <button>
                +
            </button>
        </form>
        </>
    )
}

export default TaskBar;