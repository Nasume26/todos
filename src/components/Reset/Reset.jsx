

const Reset = (props) => {
    const { handleReset } = props;


    return (
        <>
        <button
        onClick={handleReset}
        >Reset</button>
        </>
    )
}

export default Reset;