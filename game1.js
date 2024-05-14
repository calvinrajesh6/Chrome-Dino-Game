
let started = false;
let animationInProgress = false;

startGame();

function startGame() {
    if (!started) {
        $(document).on("keypress", function(event) {
            console.log(event.key);
            animationInProgress=$("#char").hasClass("car");
            if (event.key == " " && !animationInProgress) {
                $("#char").addClass("car");
                animationInProgress=$("#char").hasClass("car");
                setTimeout(function() {
                    $("#char").removeClass("car");
                    animationInProgress=$("#char").hasClass("car");
                }, 600);
                continueGame();
            }
        });
        started = true;
    }
}

function continueGame() {
    $("#obstacle").addClass("obstacle").css("visibility", "visible");
    let highScore = localStorage.getItem("highScore");
if (highScore === null) {
    localStorage.setItem("highScore", 0);
}

let score = 0;
setInterval(function () {
    let character = document.querySelector('#char');
    let obstacle = document.querySelector('#obstacle');
    let gameOver = $(".game-over");
    let restart = $(".restart");

    let cx = parseInt(window.getComputedStyle(character).getPropertyValue('left')) || 0;
    let cy = parseInt(window.getComputedStyle(character).getPropertyValue('bottom')) || 0;

    let ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));

    console.log(cx, cy, ox, oy);
    

    if (cy<40 && ox<150) {
        if (score > localStorage.getItem("highScore")) {
            localStorage.setItem("highScore", parseInt(score));
        }
        score = 0;
        console.log(gameOver.css('visibility'));
        $(".your-score").text('Your Score: ' + parseInt(score));
        $(".high-score").text('High Score: ' + localStorage.getItem("highScore"));
        gameOver.css('visibility', 'visible');
        restart.css('visibility', 'visible');
        // $("#obstacle").removeClass('obstanim');
        $("#restpic").on("click", function(event){
            if(event!=null)
            restartGame();
        })
    } else if (gameOver.css('visibility')=='hidden') {
        score += 0.9;
        $(".your-score").text('Your Score: ' + parseInt(score));
        $(".high-score").text('High Score: ' + localStorage.getItem("highScore"));
    }
}, 100);
}

function restartGame() {
    score = 0;
    const gameOver = $(".game-over");
    gameOver.css('visibility', 'hidden');
    const restart = $(".restart");
    restart.css('visibility', 'hidden');
    const restartButton = $("#restpic");
    restartButton.css('visibility','hidden');
    const scoreElement = $("#score"); 
    scoreElement.text('Your Score: 0');
    const obstacle = $(".obstacle");
    obstacle.addClass('obstanim');
}
