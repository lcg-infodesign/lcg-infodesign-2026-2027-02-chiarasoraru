let descrizione = 150; 

function setup() {
  angleMode(DEGREES);

  let numeroGlifi = 1000; // devo calcolare quante colonne e righe servono per contenere 1000 glifi.
  let numeroColonne = 12; //senno viene un casino
  let numeroRighe = ceil(numeroGlifi / numeroColonne); //ceil arrotonda per eccesso round arrotonda classico
 // pra calcolo altezza e lunghezza di ogni cella
  let dimColonna = windowWidth/numeroColonne; //
  let dimRiga = dimColonna; // celle quadrate

  createCanvas(windowWidth, dimRiga * numeroRighe + descrizione); // l'ho messa qui e scritta così perchè altrimenti la pagina non scorre
  background(0, 66, 128);

    //qua metto le cose per la descrizione
    fill (240, 255, 0);
    textSize(45);
     text("Second Assignment - Glyphs System ", 40, 100);



  let xCorrente = 0; 
  let yCorrente = descrizione; 
  // tengono traccia di dove sono nella griglia e partono da angolo in alto a sx

  // uso il ciclo for per disegnsare i i glifi
  for (let g = 0; g < numeroGlifi; g++) {
    let dimensione = dimColonna * random(0.1, 0.7) // da molto piccola a molto grande
    // queste sotto servono per posizionare il glifo nella cella
   
    mioGlifo(xCorrente + 0.5*dimColonna, yCorrente + 0.5*dimRiga, dimensione); 
    
    xCorrente = xCorrente + dimColonna; // dopo aver disegnato ti sposti a destra di una cella per riscrivere un nuovo glifo
    if (xCorrente  >= windowWidth) { // questo if va qui (dopo lo spostamento) perchè devo prima spostarmi e poi controllare se sono arrivata in fondo alla riga
      yCorrente = yCorrente + dimRiga;
      xCorrente =  0; 
    }
  }
}

function draw() {
}

function mioGlifo(_x, _y, _size) { // scrivo cosi perche sono parametri che ricevo dal ciclo
  push();

  translate(_x, _y); //NB: translate sposta l’origine nel centro della cella, così mi posiziono nel centro della pagina (da 0 0 a centro).
   // faccio prima translate di disegnare perchè il disegno usa le coordinate al centro

     // colore e rotazione variano
   rotate(random(360));
  fill(random(150, 255), random(50, 255), random(0, 200));
  noStroke(); // prima mi veniva fuori bordo nero!!!!

   // NON VARIA MAI: la forma
   let spirale = _size / 12;


  for (let i = 1; i <= 12; i++) {
    rect(0, 0, i * spirale, spirale * 0.6);   // disegno un lato 
    translate(i * spirale, 0);    // mi sposto alla fine del lato
    rotate(90);                 // giro di 90 gradi
  
  }

  pop();
  }

