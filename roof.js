class Roof
{
    constructor()
    {
        this.body=Bodies.rectangle(350,100,700,30, {isStatic:true});
        this.width=700;
        this.height=30;
        World.add(world,this.body);
    }
    display()
    {
        fill("grey");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}