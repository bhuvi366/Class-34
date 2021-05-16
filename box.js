class Box  {
  constructor(x, y, width, height){
    var options ={
'restitution': 0.1,
'friction': 0.1,
'density':0.1,

    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World . add(world ,this.body);
  }

  display(){
var position = this.body.position;
var angle = this.body.angle;
push();
translate (this.body.position.x,this.body.position.y);
  rotate (angle);
  rectMode (CENTER);
  stroke ("red")
  strokeWeight (4);
  fill (255);
  rect (0,0,this.width,this.height);
  pop ();
    
  }

};
