class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("castle.png");
        World.add(world,this.body);
      }
      display(){
       
       var pos = this.body.position;
       fill(255);
       push();
        image(this.image, 250, 0, this.width, this.height);
        pop();
       rect(pos.x,pos.y,this.width,this.height);

      }
}