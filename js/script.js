/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del contro*/

const lista = document.getElementById('outuput');

const email =['ciccio', 'paco' ,'red'];

const utenteX = prompt('inserisci la tua email');

for(i = 0; i<email.length; i++){
  if(email[i] == utenteX){
    
    console.log('l utente è registrato');
  }else 
  console.log('utente non registrato');
}
