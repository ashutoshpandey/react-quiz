export const initialState = {
    questions: [],
    status: 'loading',  // loading, error, finished, ready, active
};

export function reducer(state, action) {
    console.log(action);
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
        default:
            throw new Error('Unknown action');
    }
}
