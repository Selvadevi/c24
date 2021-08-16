class CannonBall{
    constructor(x,y){
      var options = {
        restitution : 0.8,
        density : 1,
        isStatic : true,
        friction : 1
    }
    this.r = 40;
    this.image = loadImage("assets/cannonball.png");
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
}

shoot(){
    Matter.Body.setVelocity(this.body, {x:100,y:30});
}

display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    image (this.image,0,0,this.r,this.r);
    pop();

}


}