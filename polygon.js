class Polygon{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        this.image.scale = 0.0000000001;

        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}