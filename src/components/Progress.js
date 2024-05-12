function Progress({ index, numQuestions }) {
    return (
        <header>
            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
        </header>
    );
}

export default Progress;