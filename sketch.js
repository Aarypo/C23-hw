const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(0,0,0,0);
    box1.visibility = false;
  
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    
}