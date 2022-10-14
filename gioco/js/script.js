/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/



var dado1 = Math.round(Math.random()*5+1);

console.log(dado1);

var dado2 = Math.round(Math.random()*5+1);

console.log(dado2);

let vincitore = false;

if(dado1 > dado2){
  vincitore = true;
  console.log('Ha vinto Utente');
}else{
  vincitore = false;
  console.log('Ha vinto il PC');

}

