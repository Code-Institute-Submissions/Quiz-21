document.addEventListener("DOMContentLoaded", function() {
    const HighScoresList = document.getElementById('high-scores-list');
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    HighScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
});