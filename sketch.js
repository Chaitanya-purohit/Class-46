var tieFighter, x_Wing, tieFighter_Vader, tieSound, x_WingSound, deathStarImage
var bg, pew_pew
var gameState = "PLAY"

var tie1, tie3, vaderTie, luke_X_wing, pew_pew, bad_pew_pew

function preload(){
deathStarImage = loadImage("deathStarImage.png")
tieFighter_Vader = loadImage("tieVader.png")
tieFighter = loadImage("tieFighter.png")
x_Wing = loadImage("X-wing.png")
pew_pew= loadImage("lazer_pew_pew.png")
tieSound = loadSound("tieFighterSound.mp3")
x_WingSound = loadSound("xWingSound.mp3")

}




function setup() {
  createCanvas(400, 600);
  bg=createSprite(200,200)
  bg.addImage(deathStarImage)
  bg.scale=2.3
 
  tie1 = createSprite(120, 550)
  tie1.addImage(tieFighter)
  tie1.scale=0.15

  vaderTie = createSprite(200, 550)
  vaderTie.addImage(tieFighter_Vader)
  vaderTie.scale=0.05
  
  tie3 = createSprite(275, 550)
  tie3.addImage(tieFighter)
  tie3.scale=0.15
 
  luke_X_wing = createSprite(205, 390)
	luke_X_wing.addImage(x_Wing)
  luke_X_wing.scale=0.05
	luke_X_wing.rotation = 180
  luke_X_wing.rotateToDeirection = true
  bulletGroup= new Group()
  b1Group= new Group()
	 
}


function draw() {
  background("black");  

  if(gameState==="PLAY"){
    x_WingSound.play()
    tieSound.play()

    if(keyDown("RIGHT_ARROW")){
      luke_X_wing.x+=5
    }
   
    if(keyDown("LEFT_ARROW")){
      luke_X_wing.x-=5
    }
  
    
    bg.velocityY=1

    if(bg.y>200){
      gameState="END"
    }
  }
  if(frameCount%60===0){
    createBullet()
  }

  drawSprites();
 
}   

function createBullet() {
  var bullet= createSprite(random(120, 275), vaderTie.y);                                          
  bullet.velocityY = -2;
  //bullet.lifetime = 1000;
  bullet.addImage(pew_pew)
  bullet.scale=0.1
  bulletGroup.add(bullet);
  
}

function photonBomb() {
  var b1= createSprite(luke_X_wing.x, luke_X_wing.y);                                          
  b1.velocityY = -2;
  b1.addImage(pew_pew)
  b1.scale=0.1
  b1Group.add(b1);
  
}