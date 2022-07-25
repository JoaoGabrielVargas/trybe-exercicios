const checkNumbers = (randomNumber, numero) => randomNumber === numero; 

const sorteiaNumeros = (numero, callback) => {
  const randomNumber = Math.floor((Math.random() * 5) + 1);
  console.log(randomNumber);
  return callback(numero, randomNumber) ? 'Parabéns, você ganhou!' : 'Oh não! Deu ruim!'
}

console.log (sorteiaNumeros(5, checkNumbers));