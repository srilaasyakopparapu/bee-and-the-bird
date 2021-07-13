
//BIRD AND BEE CHASE WITH COLLISION DETECTION algorithm and writing functions with arguments

// creating 2 boxes
var box1,box2;
var bee_img;
var birdFlying;


function preload(){

  bee_img = loadImage("bee.png");
  birdFlying = loadAnimation("bird1.png", "bird2.png", "bird3.png","bird4.png")
}


// setting up the code
function setup(){
  createCanvas(600,600);
  box1 = createSprite(200,200,70,70);
  box1.addImage("img",bee_img);
  box2 = createSprite(200,300,100,100);
  box2.addAnimation("flying",birdFlying);
  box1.scale=0.5;
  box2.scale=0.5;
 
  
}


function draw(){
  background(0);
  // movig the box with mouse
   box1.x = World.mouseX;
   box1.y = World.mouseY;
   
   
 if(isColliding(box1,box2)){
  //box1.shapeColor= color(random(255),random(255),random(255));
 // box2.shapeColor = color(random(255),random(255),random(255));
   box2.destroy();
   box2 = createSprite(Math.round(random(10,500)),Math.round(random(10,500)));
   box2.addAnimation("flying",birdFlying);
   
   
 }
   

  if(box2.x<20||box2.x>450){
    box2.visible=false;
    textSize(20);
    fill("red");
    text("OHHH!!! CHASE OVER",50,200)
    text("Again move the bird to restart",50,300)
  }

   drawSprites();

}

function isColliding(object1,object2){
// collision Algorithm of 2 boxes and everytime colour changes randomnly on collision
if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
  object2.x - object1.x < object1.width/2 + object2.width/2 &&
  object1.y - object2.y < object1.height/2 + object2.height/2 &&
  object2.y - object1.y < object1.height/2 + object2.height/2 ) {
    return true 
  }
  else{
    return false
  }
 
}

