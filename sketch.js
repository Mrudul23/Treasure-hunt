var bg,bg2,form,system,code,security;
var score=0;
var tries = 5

function preload() {
 
  
  bg= loadImage("cave.jpg")
  bg2=loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
}

function draw() {
  background(bg);
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 850, 35);
  text("Tries left : "+tries,850,60);   

  if(score === 3) {
    clear()
    background(bg2)
    stroke("black")
    strokeWeight("10")
    fill("white")
    textSize(60);
    text("Treasure unlocked !!!",250, 270);
    tries = -1
     
   }

   if(score === 3 && tries > 0) {
    swal({
      title: `Congratulations !`,
      text: "treasure unlocked" ,
      imageUrl:"loo.png",
      imageSize: "150x150",
      cancelButtonText: "Ok",
    });}



  if(tries <1){
     security.hide()
  }
  
  if(tries > 0 && score < 3){

  clues();
  strokeWeight(2)
  push();
        stroke("white")
				fill(0,0,0,100);
				rect(30,100,280,200);
		pop();
    push();
        stroke("white")
        fill(0,0,0,100);
        rect(670,100,280,200);
    pop();
    push();
        stroke("white")
				fill(0,0,0,100);
				rect(355,250,280,200);
		pop();}

  drawSprites()
}

