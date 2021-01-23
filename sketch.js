const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world; 

function preload() {
//preload the images here
engine = Engine.create();
world = engine.world;
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  Superhero = new Hero(100,200,70,70);

}

function draw() {
  background(0);
  Engine.update(engine);
  Superhero.display();
 

}

function MouseDragged () {
  Matter.Body.setPosition(Superhero.body, {x: mouseX , y: mouseY});
}


