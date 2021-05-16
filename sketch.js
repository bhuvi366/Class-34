const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var ball,rope;

function preload() {
   
    
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   box5 = new Box(810,160,70,70);
   box6 = new Box(810,160,70,70);
   box7 = new Box(810,160,70,70);
   box8 = new Box(810,160,70,70);
   box9 = new Box(810,160,70,70);
   box10 = new Box(810,160,70,70);
   box11 = new Box(810,160,70,70);
   box12= new Box(810,160,70,70);
   box13 = new Box(810,160,70,70);
   box14 = new Box(810,160,70,70);
   box15 = new Box(810,160,70,70);
   box16 = new Box(810,160,70,70);
   box17 = new Box(810,160,70,70);
   box18 = new Box(810,160,70,70);
   box19 = new Box(810,160,70,70);
   box20 = new Box(810,160,70,70);
   box21 = new Box(810,160,70,70);

    

    ball = new Ball(500,50);

    rope = new Rope(ball.body,{x:500,y:10});

}

function draw(){
background (255);
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
box5.display();
ball.display();

    rope.display();
    
}
 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})  
}

  

 
