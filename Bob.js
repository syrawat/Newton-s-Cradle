class Bob {
    constructor(x,y,r){
        var options={
           friction:0.4,
            density:1,
           restitution:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill ("cyan");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}