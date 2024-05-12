function Question({ question, dispatch, answer, index, numQuestions }) {
    if (index < numQuestions - 1) {
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

                <button onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
            </div >
        );
    } else {
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

                <button onClick={() => dispatch({ type: 'finish' })}>Finish</button>
            </div >
        );
    }
}

export default Question;