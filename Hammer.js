class Hammer {
    constructor(x, y){
        var options = {
            'density' : 2.0,
            'friction' : 1.0,
            'restitution' : 0.5
        }
      
      this.body = Bodies.rectangle(x, y, 80, 50, options);
      this.width = 80;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
    
    
}