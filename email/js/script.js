/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del contro*/

const esito = document.getElementById('outuput');

const email =['ciccio@gmaail.com', 'paco@outlook.com' ,'red@hgmail.com'];

const utente = prompt('inserisci la tua email');

let trovato = false;

for( let i = 0; i<email.length; i++){
  if(email[i] == utente){
    trovato = true;
  }
}


if (trovato == true) {
  console.log('trovato');
} else {
  console.log('NON TROVATO');
}
