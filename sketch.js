var cat , mouse
var catimg , mouseimg ,mouseimg2   
var bg , catimg2 , catimg3 
var mouseimg3  

function preload() {

    catimg=loadAnimation("images/cat1.png")
    catimg2=loadAnimation("images/cat2.png","images/cat3.png")
    catimg3=loadAnimation("images/cat4.png")
    
    bg=loadImage("images/garden.png")

    mouseimg=loadAnimation("images/mouse1.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3=loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    
    mouse=createSprite(200,600)
    mouse.addAnimation("mouse standing",mouseimg) 
    mouse.scale=0.10

    cat=createSprite(850,600)
    cat.addAnimation("cat sleeping",catimg) 
    cat.scale=0.2
}

function draw() {
  background(bg);
    

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){

    
   

     mouse.addAnimation("mouse teasing",mouseimg2)
     mouse.changeAnimation("mouse teasing")
     mouse.frameDelay=25 ;
}

if(keyCode===UP_ARROW){

    
    cat.velocityX=-2
    cat.addAnimation("cat running ",catimg2)
    cat.changeAnimation("cat running")
    cat.frameDelay=25

}
}