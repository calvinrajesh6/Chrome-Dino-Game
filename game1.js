document.onkeydown = function(e){
    console.log("console"+ e.keyCode);
    if(e.keyCode==38 && !car.classList.contains('animatecar')){
        car = document.querySelector('.char');
        car.classList.add('animatecar');
        setTimeout(()=>{
            car.classList.remove('animatecar')
        },700);
    }
}

let score = 0; // Declare the score variable outside the setInterval function to persist its value

setInterval(() => {
    car = document.querySelector('.char');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obst');

    cx = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));

    console.log(cx, ox, cy, oy);
    
    if (ox < 80 && ox > 0 && cy < 160) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstanim');
        alert("Game Over!");
    } else if(gameover.style.visibility != 'visible') {
        score += 0.09; // Update the score value
        let scoreElement = document.getElementById('score');
        scoreElement.textContent = 'Your Score: ' + parseInt(score); // Update the score displayed in the HTML
    }
}, 20);

set
