const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var engine,world;
var drops=[]
var rand
var maxdrops=100
var thunderframe=0
var thunder;
function preload(){
    thunder1=loadImage("images/1.png")
    thunder2=loadImage("images/2.png")
    thunder3=loadImage("images/3.png")
    thunder4=loadImage("images/4.png")
}

function setup(){
   engine=Engine.create()
   world=engine.world

   createCanvas(400,700)
   u1=new Umbrella(200,500,50,100)
    if(frameCount%150==0){
        for(var i=0;i<maxdrops;i++)
        {
            drops.push(new Drop (random(0,400),random(0,400),5))
        }
    }
}

function draw(){
    background(0)
    Engine.update(engine)
    rand=Math.round(random(1,4))
if(frameCount%80==0){
    thunderframe=frameCount
    thunder=createSprite(random(10,370),random(10,30),10,10)
    switch(rand){
        case 1: 
        thunder.addImage(thunder1)
        break;
        case 2: 
        thunder.addImage(thunder2)
        break;
        case 3: 
        thunder.addImage(thunder3)
        break;
        case 4: 
        thunder.addImage(thunder4)
        break;
    }
    thunder.scale=random(0.3,0.6)
}
    if(thunderframe+10==frameCount&&thunder){
        thunder.destroy()
    }
    u1.display()
    for(var i=0;i<maxdrops;i++){
        drops[i].updatey()
        drops[i].display()
    }
    drawSprites()
}   

