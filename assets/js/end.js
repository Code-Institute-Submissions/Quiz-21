const maxIndex = 10;

document.getElementById('username').addEventListener('keyup', () => {
    document.getElementById('saveHighScoreBtn').disabled = !username.value;
});

saveHighScore = (event) => {
    event.preventDefault();
    const username = document.getElementById('username');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScore = localStorage.getItem('NewHighScore');

    const score = {
        score: highScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(maxIndex);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/index.html');
}
