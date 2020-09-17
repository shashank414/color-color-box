class Box{

constructor(x,y,w,h){

    var box_options ={
        isStatic: false
    }
    this.body=Bodies.rectangle(x,y,w,h,box_options);
    this.width=w
    this.height=h
  this.color=rgb(random(0,255),random(0,255),random(0,255))  
    World.add(world,this.body);
}
display(){
    fill(this.color)
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.width,this.height);




}


}














