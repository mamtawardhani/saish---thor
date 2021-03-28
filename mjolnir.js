class MJOLNIR extends BaseClass{
    constructor(x,y){
      super(x, y, 80, 80);
      this.image = loadImage("Images/Mjolnir.png");
      this.array1 = [];
      this.array2 = [];
    }
    display(){
 
      super.display();
  
      if(this.body.speed>10 && this.body.position.x>200) {
      var bodyxp = [this.body.position.x]; 
      var bodyyp = [this.body.position.y];
  
      this.array1.push(bodyxp);
      this.array2.push(bodyyp);
      }
  
      for(var start = 0; start<this.array1.length; start++) {
        push();
        fill("white");
        ellipse(this.array1[start], this.array2[start], 10,10);
        pop();
      }
  
    }
  }