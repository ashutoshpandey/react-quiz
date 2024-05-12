export const fetchQuestions = () => {
    let url = 'http://localhost:9000/questions';

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}
