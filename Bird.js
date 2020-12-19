class Bird extends Base {
    constructor(x, y) {
      
      super(x, y , 30 , 30 )
   
      this.image = loadImage("bird.png")
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX 
      pos.y = mouseY
    super.display()
    }
  };
  