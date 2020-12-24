class Rope
{
    constructor(bodyA,bodyB, offsetX, offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options= { 
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:0.03,
            length:250
        };
        this.line=Constraint.create(options);
        World.add(world,this.line);
    }
    display()
    {
        var pointA=this.line.bodyA.position;
        var pointB=this.line.bodyB.position;
        push();
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop();
    }
}