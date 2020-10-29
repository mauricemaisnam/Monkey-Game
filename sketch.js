
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw() {

background("white");
  
  if(ground.x<0) {
   ground.x=ground.width/2; 
  }
  
if(keyDown("space")) {
  monkey.velocityY=-13;
}  
  
monkey.velocityY=monkey.velocityY+1
  
  monkey.collide(ground);
  
  if (frameCount % 250 === 0){
   var obstacle = createSprite(500,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
   obstacle.velocityX = -6;
    obstacle.lifetime=150;
    
    obstacleGroup.add(obstacle);
  }
  
  if (frameCount % 200 === 0){
   var banana = createSprite(600,Math.round(random(120,200)),10,40);
    banana.addImage(bananaImage);
    banana.scale=0.1;
   banana.velocityX = -7;
    banana.lifetime=150;
    
    bananaGroup.add(banana);
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("Black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
 drawSprites(); 
}








