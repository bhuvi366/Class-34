class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.5,
            length:250,

        }
    this. pointB = pointB
    this.rope = Constraint .create(options);
    World .add (world,this.rope);

    }
    
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
       stroke (48,22,8);
   strokeWeight(7);
   line (pointB.x,pointB.y,pointA.x,pointA.y)
        
      

}


        }
        


    }


