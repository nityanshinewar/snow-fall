var snow;
var back_ground;

function preload(){
  back_ground=loadImage("snow3.jpg");

}
function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(back_ground);  


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    snow.push(new Snow(j,75));
  }

  drawSprites();
}