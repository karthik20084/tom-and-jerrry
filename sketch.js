var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;
var bg,backimg;
var PLAY = 1;
var END = 0;
var gamestate = Play ;
function preload() {
    //load the images here
backimg = loadImage("garden.png");
cat1 = loadImage("cat1.png");
cat2 = loadImag("cat2.png");
cat3 = loadImage("cat3.png");
cat4 = loadImage("cat4.png");
mouse1 = loadImage("mouse1.png");
mouse2 = loadImage("mouse2.png");
mouse3 = loadImage("mouse3.png");
mouse4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,500)
    bg.addImage(backimg);
    bg.scale=0.8;
    cat = createSprite(800,400);
    cat.addImage("cat",cat1);
    cat.addImage("cat",cat2);
    cat.addImage("cat",cat3);
    cat.addImage("cat",cat4);
    cat.scale=0.2;
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
    cat.debug = false;
    mouse = createSprite(400,400);      
    mouse.addImage("mouse",mouse1);
    mouse.addImage("mouse",mouse2);
    mouse.addImage("mouse",mouse3);
    mouse.addImage("mouse",mouse4);
    mouse.scale=0.5;
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
    mouse.debug = false;

}

function draw() {
//Write condition here to evalute if tom and jerry collide
mouse.changeImage("mouse",mouse1)
cat.changeImage("cat",cat1)
if(gameState===Play){  

if(keyDown("space")){
cat.velocityX=-3;
cat.changeImage("cat",cat2,cat3)
mouse.changeImage("mouse",mouse2,mouse3);
}
if(cat.isTouching(mouse)){ 
gameState=END;
}
}
if(gameState===END){
cat.changeImage("cat",cat4);
mouse.changeImage("mouse",mouse4)
cat.velocityX=0;
}


    drawSprites();
}


function keyPressed(){
    
    //For moving and changing animation write code here
    
    
    
    

}