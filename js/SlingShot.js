class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
        this.sling1 = loadImage('rock.png');
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
           // write stroke() to set the color to red
            stroke(188,67,67);
           // Write line() to draw a line from pointA to pointB
            //line(pointA.x + 25)
            line(pointA.x + 5, pointA.y, pointB.x -10, pointB.y);
            image(this.sling1, pointA.x + 5, pointA.y + 5, 20, 20);
        }
    }
    
}