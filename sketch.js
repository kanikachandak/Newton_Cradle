
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5, roof, rp1,rp2,rp3,rp4,rp5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1= new Bob(270,300);
	b2= new Bob(320,300);
	b3= new Bob(370,300);
	b4= new Bob(420,300);
	b5= new Bob(470,300);
	roof= new Roof();

	rp1= new Rope(b1.body,roof.body,-250,0); 
	rp2= new Rope(b2.body,roof.body,-150,0);
	rp3= new Rope(b3.body,roof.body,-50,0);
	rp4= new Rope(b4.body,roof.body,50,0);
	rp5= new Rope(b5.body,roof.body,150,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  rp1.display();
  rp2.display();
  rp3.display();
  rp4.display();
  rp5.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
}

function keyPressed()
{
	if(keyCode ===UP_ARROW)
	{
		Matter.Body.applyForce(b5.body,b5.body.position,{x:250,y:-250});
	}
}



