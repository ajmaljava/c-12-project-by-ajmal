var aditya,ing1
function preload(){
  //pre-load images
  ing1 = loadAnimation("Runner-1.png","Runner-2.png")
pathing=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathing)
  aditya=createSprite(200,350,70,70)
  aditya.addAnimation("running",ing1)
  path.scale=1.2
aditya.scale=0.1
}

function draw() {
  background(0);
  aditya=World.mouseX
if(path.y > 400){
  path.velocityY=4;
  path.y=height/2
}
drawSprites()
}
