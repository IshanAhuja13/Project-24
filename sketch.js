
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,350);


	Engine.run(engine);
  
}


function draw() {
	
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  hammer.display();
 
}



