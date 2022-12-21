/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero 
di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo). 
*/

/*** BOTTONI ***/
// variabile bottone generatore di biglietto
const generateButton = document.getElementById('data_generation');
// variabile bottone Annulla
const resetButton = document.getElementById('total_reset');

// cattura input alla pressione del tasto Genera
generateButton.addEventListener('click', function () {
  const userFullName = document.getElementById('user_full_name').value;
  const userKm = parseInt(document.getElementById('trip_length').value);
  const prizeCategory = document.getElementById('tariff_category').value;

  //   biglietto reso visibile
  document.getElementById('ticket_reveal').classList.add('active');

  // calcolo costo biglietto senza sconti
  let ticketFinalPrice = userKm * 0.21;

  // calcolo costo biglietto scontato
  if (prizeCategory === 'minorenne') {
    ticketFinalPrice *= 0.8;
  } else if (prizeCategory === 'over') {
    ticketFinalPrice *= 0.6;
  }
  console.log(`Il costo del biglietto è ${ticketFinalPrice.toFixed(2)} euro`);

  //   calcolo tipo di offerta per il biglietto
  let ticketType = 'Biglietto Standard';
  if (prizeCategory === 'minorenne') {
    ticketType = 'Biglietto Minori';
  } else if (prizeCategory === 'over') {
    ticketType = 'Biglietto Senior';
  }

  //   generatore numero random carrozza
  const carriageNumber = Math.floor(Math.random() * 10) + 1;

  //   generatore numero random CP
  const cpNumber = Math.floor(Math.random() * 1000) + 1;

  //   inserimento dati in HTML
  document.getElementById('actualUserName').innerHTML = userFullName;
  document.getElementById('ticket_type').innerHTML = ticketType;
  document.getElementById(
    'ticket_amount'
  ).innerHTML = `${ticketFinalPrice.toFixed(2)} euro`;
  document.getElementById('carriage').innerHTML = carriageNumber;
  document.getElementById('cp_code').innerHTML = cpNumber;
});

// reset dei dati alla pressione del bottone annulla e biglietto reso invisibile
resetButton.addEventListener('click', function () {
  document.getElementById('user_full_name').value = '';
  document.getElementById('trip_length').value = '';
  document.getElementById('tariff_category').value = 'maggiorenne';
  document.getElementById('ticket_reveal').classList.remove('active');
});
