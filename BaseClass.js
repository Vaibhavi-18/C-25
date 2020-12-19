class Base {
    constructor(x, y, width , height , angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width , height , options);
      this.width = width ;
      this.height = height ;
      
      World.add(world, this.body);
      this.image = loadImage("base.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      image(this.image , 0, 0, this.width, this.height);
      pop();
    }
  };
  