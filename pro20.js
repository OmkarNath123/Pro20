var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1550,200,60,hieght/2);
}

function draw() {
  background(blue); 
  car.velocityX=speed;
  if(wall.x=c.x(car.widht+wall.widht)/2)
  {car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{car.shapeColor=color(255,0,0);
}
if(deformation<180&& deformation>100){
  car.shapeColor=color(230,230,0);
}
if (deformation<100){
  car.shapeColor=color(0,250,0);
}
}
  drawSprites();
}