const accessCode1 = "ARRAY";
const accessCode2 = "LOOP";
const accessCode3 = "DATABASE";

function clues() {
    
    fill("white")
    textSize(40)
    push()
    textFont("cooper")
    textAlign(CENTER)
    text("Coding treasure hunt",width/2,60)
    text("_____________________",width/2,70)    
    pop()

    fill("white")
    textSize(15)
    text("① : R A Y R A", 50,150)
    fill("lightblue")
    text("Hint: Groups together similar variables !!", 45,190)

    fill("white")
    textSize(15)
    text("② : L O P O ", 700,150)
    fill("lightblue")
    text("Hint:  Allow you to run a block of code repeatedly !!", 700,170,250)

    fill("white")
    textSize(15)
    text("③ : A T E D A S B A", 375,290)
    fill("lightblue")
    text("Hint: Stores all information !!", 375,340)  
}