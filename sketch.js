const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var platform1, platform2;
var rope;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;

  platform1 = new Ground(window.innerWidth/2, window.innerHeight/1.3, window.innerWidth, 30);
  platform2 = new Ground(window.innerWidth/5, window.innerHeight/1.737, 150, 263);

 thor = new Thor(window.innerWidth/5, window.innerHeight/3);
  Mjolnir = new MJOLNIR(window.innerWidth/2, window.innerHeight/2);

  rope = new Rope(Mjolnir.body, {x:window.innerWidth/2,y: window.innerHeight/2});

}

function draw() {
  background(0, 255, 0);  
  Engine.update(engine);

  platform1.display();
  platform2.display();

  thor.display();
  Mjolnir.display();

  rope.display();

  

  drawSprites();
}