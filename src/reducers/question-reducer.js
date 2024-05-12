export const initialQuestionState = {
    index: 0,
    correct: 0,
    questions: [],
    status: 'loading',  // loading, error, finished, ready, active
};

export function questionReducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state,
                status: 'ready',
                questions: action.payload
            };
        case 'dataError':
            return {
                status: 'error'
            };
        case 'start':
            return {
                ...state,
                status: 'active',
                questions: state.questions
            };
        case 'newAnswer':
            const question = state.questions.at(action.payload.index);

            return {
                ...state,
                correct: question.correctOption === action.payload ? state.correct + 1 : state.correct
            };
        case 'nextQuestion':
            return { ...state, index: state.index + 1 };
        case 'finish':
            return {
                ...state,
                status: 'finished'
            };
        default:
            throw new Error('Unknown action');
    }
}
