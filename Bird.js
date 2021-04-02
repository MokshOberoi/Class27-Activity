class Bird extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("Images/bird.png");
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}

/*class Bird  {
    constructor (x,y,width,height) {
        var bird_options = { 
            restitution : 0.5,
            friction : 1.0,
            density : 1.5
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/bird.png") ;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height, bird_options) ; // create body
          World.add (myWorld, this.body ); // add body to myworld  
          console.log(this.body);
    }

    display () {
        var PosX, PosY , Pos = this.body.position;
        var angle = this.body.angle ;
        Pos.x = mouseX;
        Pos.y = mouseY;
        push();
        strokeWeight(5);
        stroke("green");
        translate (Pos.x , Pos.y) ;
        angleMode (RADIANS);
        rotate(angle);
        imageMode (CENTER);
        //rect (0, 0,this.width, this.height) ;
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}*/

