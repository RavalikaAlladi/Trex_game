
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,50,50,50);
 
}

function draw(){
  background(220);
  text(mouseX+","+mouseY, 50, 50)
  
  drawSprites();
}
