class Stone { 
    
    constructor(x,y,width,height){
        this.image = loadImage("Recipe.png");
    var options = {
    isStatic: true,
    'restitution': 0.8, 
    'friction':1.0, 
    'density':1.5 
} 
this.body = Bodies.rectangle(x,y,width,height,options) 
this.width = width 
this.height = height
 World.add(myWorld,this.body)
 
} 

display() { 
    var pos = this.body.position; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x,pos.y); 
    rotate(angle) 
    imageMode(CENTER) 
    fill (255) 
    stroke("black")
    strokeWeight(4)
    image(this.image, 0, 0,this.width,this.height)
     pop ();

}
};