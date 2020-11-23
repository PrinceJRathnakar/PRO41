class Umbrella{
constructor(x,y,w,h){
    var options={
        isStatic:true

 
    }
    this.image=loadImage("images/walking_1.png")
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)

}
display(){
    var pos=this.body.position
    imageMode(CENTER)
   image(this.image,pos.x,pos.y,300,300)
}

}

