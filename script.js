const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWith = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWith, frameY * spriteHeight, spriteWith, spriteHeight, 0, 0, spriteWith, spriteHeight);
    if(frameX < 7) frameX ++;
    else frameX = 0;
    requestAnimationFrame(animate);
}

animate();

