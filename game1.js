document.addEventListener("DOMContentLoaded", function() {
    const myImage = document.getElementById('myImage');
    myImage.addEventListener('click', function() {
        restartGame();
    });

document.onkeydown = function(e) {
    if (e.keyCode == 38 && !car.classList.contains('animatecar')) {
        car = document.querySelector('.char');
        car.classList.add('animatecar');
        setTimeout(() => {
            car.classList.remove('animatecar');
        }, 700);
    }
};
let highscore = localStorage.getItem("highscore");
if (highscore === null) {
    localStorage.setItem("highscore", 0);
}
let score = 0;
setInterval(() => {
    car = document.querySelector('.char');
    gameover = document.getElementById('gameover'); // Select by ID
    restart = document.getElementById('myImage'); // Select by ID
    obstacle = document.querySelector('.obst');

    cx = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));

    if (ox < 80 && ox > 0 && cy < 160) {
        if (score > localStorage.getItem("highscore")) {
            localStorage.setItem("highscore", parseInt(score));
        }
        score=0;
        gameover.style.visibility = 'visible';
        restart.style.visibility = 'visible';
        obstacle.classList.remove('obstanim');
    } else if (gameover.style.visibility != 'visible') {
        score += 0.09;
        let scoreElement = document.getElementById('score');
        scoreElement.textContent = 'Your Score: ' + parseInt(score);
    }
    let highscoreelem = document.getElementById('highscore');
    highscoreelem.textContent = 'High Score: ' + localStorage.getItem("highscore");
}, 20);
});

function restartGame() {
    score = 0;
    const gameover = document.getElementById('gameover');
    gameover.style.visibility = 'hidden';
    myImage.style.visibility = 'hidden';
    const restartButton = document.getElementById('myImage');
    restartButton.style.visibility = 'hidden';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Your Score: 0';
    obstacle = document.querySelector('.obst');
    obstacle.classList.add('obstanim');
}
