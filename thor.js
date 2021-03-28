class Thor extends BaseClass{
    constructor(x,y){
      var options = {
        isStatic : true
      }
      super(x,y,200,200, options);
      this.image = loadImage("Images/Thor.png");
      //this.array1 = [];
      //this.array2 = [];
    }
    display(){
 
      super.display();
  
      //if(this.body.speed>10 && this.body.position.x>200) {
      //var bodyxp = [this.body.position.x]; 
      //var bodyyp = [this.body.position.y];
  
      //this.array1.push(bodyxp);
      //this.array2.push(bodyyp);
      }
  
      //for(var start = 0; start<this.array1.length; start++) {
        //push();
        //fill("white");
        //ellipse(this.array1[start], this.array2[start], 10);
        //pop();
      //}
  
    //}
  }






//   class Thor{
//     constructor(x, y) {
//         var options = {
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0, isStatic:true
//         }
//         this.body = Bodies.rectangle(x, y, width,200,200);
//         this.width = width;
//         this.height = height;
//         this.image = loadImage("Images/Thor.png");
//         World.add(world, this.body);
//       }
//       display(){
//         var angle = this.body.angle;
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         imageMode(CENTER);
//         image(this.image, 0, 0,200,200);
//         pop();
//       }
// }