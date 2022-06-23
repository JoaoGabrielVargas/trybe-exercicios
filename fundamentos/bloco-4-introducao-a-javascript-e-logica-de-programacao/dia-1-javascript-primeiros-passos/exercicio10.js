const custo = 200;
const valor = 500;

if (custo >= 0 || valor >= 0) {
    let valorCustoTotal = custo + (custo * 1.2);
    let lucro = valor - valorCustoTotal;

    console.log ("O lucro foi de ", (lucro)*1000); 
}

else {
    console.log ("Valor inválido!")
}