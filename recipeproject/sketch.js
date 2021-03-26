
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);
	engine = Engine.create();
	myWorld = engine.world;
	Engine.run(engine);

	stone = new Stone(760,391,1550,800);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  stone.display();
 
}



