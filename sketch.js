var wall,thickness;
var speed, weight ,bullet ;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200 ,200 ,thickness ,height/2);
  speed=random(44,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet.velocityX = speed;
  bullet.collide(wall);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness*thickness*thickness
  
  if(damage<3.70){
    bullet.shapeColor=(green);
  }

  if(damage<12.44){
    bullet.shapeColor=(red);
  }

  drawSprites();

}