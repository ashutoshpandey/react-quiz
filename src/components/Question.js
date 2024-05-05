function Question({ question, dispatch, answer }) {
    console.log(question);

    return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">
                {question.options.map((option, index) => {
                    return <button
                        className={`
                            btn btn-option 
                            ${index === answer ? "answer" : ""} 
                            ${index === question.correctOption ? "correct" : "wrong"}
                        `}
                        key={option}
                        disabled={answer !== null}
                        onClick={() => dispatch({ type: 'newAnswer', payload: index })}>
                        {option}
                    </button>
                })}
            </div>
        </div >
    );
}

export default Question;