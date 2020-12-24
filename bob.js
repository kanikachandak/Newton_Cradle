class Bob
{
    constructor(x,y)
    {
        var options = { 'restitution':0.3,
                        'friction':0.5,
                        'density':1.2
        };
        this.body=Bodies.circle(x,y,40,options);
        this.radius=40;
        World.add(world,this.body);
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        fill("pink");
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}