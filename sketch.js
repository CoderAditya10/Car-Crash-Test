var car;
var wall;
var State = 0;
var speed, weight;
var deformation;

function setup() {

  speed = random(55, 90);
  weight = random(400, 1500);

  createCanvas(1200,400);
  car = createSprite(50, 200, 35, 15);
  car.shapeColor = color('gray');

  wall = createSprite(1000, 200, 25, 200);
  wall.shapeColor = color('gray');
}

function draw() {
  background('black');  
  drawSprites();

if(State == 0){
    car.velocityX = speed;
  }
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    State = 1;
  }
  if(State == 1){
    deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation <= 80){
      car.shapeColor = color('green');
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = color('yellow');
    }
    if(deformation >= 180){
      car.shapeColor = color('red');
    }
  }
}