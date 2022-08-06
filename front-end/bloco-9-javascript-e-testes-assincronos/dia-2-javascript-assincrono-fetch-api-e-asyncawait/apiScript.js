// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObj = {
    method: 'GET',
    headers: { 'Accept' : 'application/json' }
  };
  fetch(API_URL, myObj)
    .then(response => response.json())
    .then(data => { 
    const jokeContainer = document.querySelector('#jokeContainer');  
    const jokeElement = document.createElement('h2');
    const { joke } = data; 
    jokeElement.innerHTML = joke;
    jokeContainer.appendChild(jokeElement);
  })
};

window.onload = () => fetchJoke();