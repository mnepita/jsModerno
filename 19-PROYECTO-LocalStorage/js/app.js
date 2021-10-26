//variables
const formulario = document.getElementById('formulario');
const listaTweets = document.getElementById('lista-tweets');
let tweets = [];


// event listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', addTweet);
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets'));
    console.log(tweets);
    renderHTML();
  })
}


//functions