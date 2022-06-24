// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
let soma = 0;

for (let index = 1; index <= 50; index++) {
soma = soma + index;
}
console.log(soma);
//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.

let contaDivisivel = 0;
for (let index = 2; index <= 150; index+= 1) {
    if (index % 3 === 0) {
        contaDivisivel++;
    }
}
console.log (contaDivisivel);

if (contaDivisivel === 50){
    console.log("Mensagem secreta! S2");
}


// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let opcoes = ["Pedra", "Papel", "Tesoura"];


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime que 