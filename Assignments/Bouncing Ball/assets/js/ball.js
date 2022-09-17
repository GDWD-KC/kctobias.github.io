// Room and Ball Dimension Initialization
let roomWidth = 600;
let roomHeight = 500;
let ballWidth = 50;
let ballHeight = 50;

//Dynamically create ball and room size with style property
let room = document.getElementById('room');
room.style.width = roomWidth + 'px';
room.style.height = roomHeight + 'px';

let ball = document.getElementById('ball');
ball.style.width = ballWidth + 'px';
ball.style.height = ballHeight + 'px';

//Initializing Ball Physics

//Starting Position
let ballX = 0;
let ballY = 0;
//Starting Speed
let ballYSpeed = 0;
let ballXSpeed = 3;
//Account for Gravity
let gravity = 0.3;

//Move Ball with function using initialized variables
function moveBall () {
    //Add gravity to ball vertical speed
    ballYSpeed += gravity;
    //Move balls location with speed variable
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    //Checking for collisions against the walls(Horizontally)
    if (ballX < 0 || ballX + ballWidth > roomWidth) {
        //if the ball passed the left wall, reset to the left wall
        if (ballX < 0) {
            ballX = 0;
        } else { //Otherwise, reset ball to the right
            ballX = roomWidth - ballWidth;
        }
        //Reverse Horizontal Movement
        ballXSpeed *= -1;
    }

    //Check for collisions on the floor (Vertically)
    if (ballY + ballHeight > roomHeight) {
        //If ball passed through floor, reset to the floor
        if(ballY + ballHeight > roomHeight) {
            ballY = roomHeight - ballHeight;
        }
        //simulate friction by reducing speed and reverse vertical movement for the bounce
        ballXSpeed *= 0.99;
        ballYSpeed *= -0.85;
    }
    //Update balls position to start at the top left
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

setInterval(moveBall, 10);