var ship1;
var ship2;
var ship3;
var ship4;
var sea;
var seaimg;

function preload(){


ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimg = loadImage("sea.png")


}

function setup(){
  

  createCanvas(1400,1400);
  sea = createSprite(700,700);
  sea.addImage(seaimg);

  ship2 = createSprite(500,500,200,200);
  ship2.addAnimation("moving_ship",ship1);
}

function draw() {
background(0);
sea.velocityX = -1
if(sea.x < 0){
  sea.x = sea.width/2
}

  drawSprites();
  
 
}