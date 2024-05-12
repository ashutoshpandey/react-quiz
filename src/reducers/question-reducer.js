export const initialQuestionState = {
    index: 0,
    questions: [],
    status: 'loading',  // loading, error, finished, ready, active
    answer: null,
    points: 0
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
                answer: action.playload,
                points: question.correctOption === action.payload ? state.points + question.points : state.points
            };
        default:
            throw new Error('Unknown action');
    }
}
