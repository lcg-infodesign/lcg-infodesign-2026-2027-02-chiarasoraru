function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120,0, 150, 70);
  let numeroGlifi = 500; 
  let numeroColonne = ceil(sqrt(numeroGlifi)); //calcola la radice quadrata 
  let numeroRighe = ceil(sqrt(numeroGlifi)); //ceil arrotonda per eccesso round arrotonda classico
  let dimColonna = windowWidth/numeroColonne; 
  let dimRiga = windowHeight/numeroRighe; 

  let xCorrente = 0; 
  let yCorrente = 0; 

  for (let g = 0; g < numeroGlifi; g++) {
    
    mioGlifo(xCorrente + 0.5*dimColonna, yCorrente + 0.5*dimRiga, dimRiga*0.8); 
    xCorrente = xCorrente + dimColonna; 
    if (xCorrente  >= windowWidth) {
      yCorrente = yCorrente + dimRiga;
      xCorrente =  0; 
    }
  }
}

function draw() {
  //
}

function mioGlifo(_x, _y, _size) {
  push();

  //primo pallino
  translate(_x, _y); //così mi posiziono nel centro della pagina (da 0 0 a centro)
  circle(0, 0, _size);

  for (let i = 0; i < 4; i++) {
    //secondo pallino
    angleMode(DEGREES);
    let miarotazione = random (360); 
    let mioraggio = random (_size/10, _size/4);
    push();
      rotate(miarotazione);
      translate(_size/2, 0); 
      circle (0,0,mioraggio);
    pop();
  }

  pop();
}
