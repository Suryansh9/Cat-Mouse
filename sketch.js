var cat_moving,mouseimg,cat_collided,backgroundimg,background,cat,mouse;

function preload() {
    cat_moving = loadAnimation("cat2.png","cat3.png");
    cat_collided = loadAnimation("cat4.png");
    backgroundimg = addImage("garden.png")
    mouseimg = addImage("mouse2.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(500,400);
    background.addImage(backgroundimg);
    cat=createSprite(800,700,30,40);
    cat.addAnimation("collide",cat_collided);
    cat.addAnimation("moving",cat_moving);
    mouse=createSprite(200,700,40,30);
    mouse.addImage(mouseimg);

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    drawSprites();
}


function keyPressed(){

cat.velocityX = -5;
cat.addAnimation("cat_moving", catImg2);
cat.changeAnimation("cat_moving");

if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
cat.addAnimation("cat_collide", catImg3);
cat.changeAnimation("cat_collide") ;
}


  //For moving and changing animation write code here


}
