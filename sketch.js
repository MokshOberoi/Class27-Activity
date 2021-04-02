//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render; 
const Constraint = Matter.Constraint;

var myEngine, myWorld, ground ;
var box1 , box2 , box3 , box4 , box5;
var ground ;
var pig1 , pig2 ;
var log1 , log2 , log3 , log4 ;
var bird ;
var bgImage ;
var platform ;
var constrainedLog ;
var chain ;

function preload(){

    bgImage = loadImage("Images/bg.png");

}

function setup() {
  createCanvas(1200,400);
  
  //Create engine and world
  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  /*var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });*/

  ground = new Ground (600,height,1200,20);

  platform = new Ground(150,305,300,170);

  box1 =  new Box (700,320,70,70);

  box2 = new Box (920,320,70,70);

  pig1 = new Pig(810,350);

  log1 = new Log(810,260,300,PI/2);

  box3 = new Box (700,240,70,70);

  box4 = new Box (920,240,70,70);

  pig2 = new Pig(810,220);

  log2 = new Log(810,180,300,PI/2);

  box5 = new Box (810,160,70,70);

  log3 = new Log(760,120,150,PI/7);

  log4 = new Log(870,120,150,-PI/7);

  bird = new Bird(600,200,50,50);

  constrainedLog = new Log(230,180,80,PI/2);

  chain = new Chain(bird.body,constrainedLog.body);

 
  
  //Render.run (render);

  console.log(log4);

}

function draw() {
  //Display the objects
  background(bgImage);  
  Engine.update (myEngine);

  box1.display ();
  ground.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  platform.display();
  constrainedLog.display();
  chain.display();

  


  //drawSprites();

}