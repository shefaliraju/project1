  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies= Matter.Bodies;

  var engine;
  var world;
  var object;
 
function setup() {

  var canvas = createCanvas(400,400);
  
  engine= Engine.create();
  world= engine.world;

  object=Bodies.rectangle(200,100,50,50);
  World.add(world,object);
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  rect(200,200,50,50);
  drawSprites();
}