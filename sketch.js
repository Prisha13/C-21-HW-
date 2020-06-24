var wall,thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 60);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(60, 200, 20, 15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background("black");  

  if (collision(bullet, wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

      if (damage > 10) {
         wall.shapeColor = "green";
      }

      if (damage < 10) {
        wall.shapeColor = "red";
    }
  }

  drawSprites();
}

function collision (bullet, wall) {
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if (bulletRightEdge >= wallLeftEdge) {
     return true;
   }
     else {
       return false;
     }
}