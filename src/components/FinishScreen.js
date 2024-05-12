function FinishScreen({ correct, numQuestions }) {
    return (
        <div>
            Score: {correct} / {numQuestions}
        </div>
    );
}

export default FinishScreen;