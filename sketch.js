const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1 , pig2;
var engine, world;
var box1 , box2 , box3, box4, box5 ;
var bird ;
var log1 , log2 , log3 , log4 ; 
var bgImg

function preload(){

bgImg = loadImage("bg.png")


}



function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird (500, 300 )
    log1 = new Log (800, 400, 250, PI/2 )
    log2 =  new Log (800,320,250,PI/2)
    log3 = new Log(790,280,150,PI/7)
    log4 = new Log(810,280,150, -PI/7)
    box1 = new Box(700,470,50,50);
    box2 = new Box(900,470,50,50);
    box3 = new Box(700,380,50,50)
    box4 = new Box(900,380,50,50)
    box5 = new Box(800,300,50,50)
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (800,470)
    pig2 = new Pig (800, 380)

}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();


}