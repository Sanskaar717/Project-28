class Launcher{

    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 10
           
          }

          this.pointB = pointB;
          this.sling = Constraint.create(con);
          World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x,point.y,pointB.x,pointB.y);
    }
}