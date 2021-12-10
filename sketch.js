const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var wall1, wall2;

var ground;

function setup() {
	createCanvas(900, 800);

	engine = Engine.create();
	world = engine.world;

	var ball_Options={
		restitution:0.3,
		isStatic:false,
		friction:0,
		density:1.2
	}

	wall1 = new Wall(500,610,20,120);
	wall2 = new Wall(700,610,20,120);
	ground = new Wall(width/2,670,width,20);

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_Options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);


  wall1.display();
  wall2.display();
  ground.display();


  drawSprites();
 
}



function keyPressed(){
	if(keyDown("space")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:20});
	}
}