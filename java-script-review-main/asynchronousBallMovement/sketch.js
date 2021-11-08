var spaceShip, ssimg
var space
var space1img
var space1

function preload(){
    ssimg=loadImage("spaceship.png")
    space1img=loadImage("space.jpg")

    
}

function setup(){
    createCanvas(500,500);

    spaceShip= createSprite(250,400,10,10)
    spaceShip.addImage(ssimg)
    spaceShip.scale=0.3

    space1= createSprite(250,250, 10, 10)
    space1.addImage(space1img)
    space1.velocityY=3
    space1.scale=2
}

function draw(){
    background("black");
    
    if(keyDown("RIGHT_ARROW")){
        spaceShip.x=spaceShip.x+5
    }
    
    if(keyDown("LEFT_ARROW")){
        spaceShip.x=spaceShip.x-5
    }

    if(space1.y>300){
    space1.y=200
    }
    
    drawSprites()
}

