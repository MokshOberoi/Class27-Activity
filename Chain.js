class Chain {
    constructor(bodyX,bodyY){
        var options = {
            bodyA : bodyX,
            bodyB : bodyY,
            stiffness : 0.04,
            length : 10
        }
      
        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
    }
    display(){
        var pointA,pointB;
        pointA = this.chain.bodyA.position ;
        pointB = this.chain.bodyB.position ;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
} 