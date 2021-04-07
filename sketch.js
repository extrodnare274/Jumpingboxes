var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     createCanvas(800,600);
    block1 = createSprite(0,530,360,30); 
    block1.shapeColor = "blue"; 
    block2 = createSprite(295,530,200,30); 
    block2.shapeColor = "orange";
     block3 = createSprite(515,530,200,30); 
     block3.shapeColor = "red"; 
     block4 = createSprite(740,530,220,30);
      block4.shapeColor = "green";
       ball = createSprite(random(20,750),100, 40,40);
        ball.shapeColor = rgb(255,255,255); 
        ball.velocityX = 4;
         ball.velocityY = 9; 
        

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
  edges= createEdgeSprites();
   ball.bounceOff(edges)
   if(ball.isTouching(block1)||ball.isTouching(block2)){
       ball.shapeColor= "red"
       music.play()
       
   }
if(ball.isTouching(block3)||ball.isTouching(block4)){
    ball.shapeColor= "green"
    ball.velocityX=0
    ball.velocityY=0
}
drawSprites();

    //add condition to check if box touching surface and make it box
}
