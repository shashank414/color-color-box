const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    
    console.log(ground);
box=new Box(200,100,50,50);
box1=new Box(200,90,50,50);
box2=new Box(200,80,50,50);
box3=new Box(200,70,50,50);
box4=new Box(200,60,50,50);
box5=new Box(200,50,50,50);
box6=new Box(200,40,50,50);
box7=new Box(200,30,50,50);
box8=new Box(200,20,50,50);



}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   box.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   
}