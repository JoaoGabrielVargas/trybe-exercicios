const currentHour = 8;
let message = "";

if (currentHour >= 22){
    message = "Não deveríamos comer nada pois está tarde";    
}
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite. Vamos jantar!";
}
else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!";
}
else {
    message = "hmmm, cheiro de café recém passado";
}

console.log (message);

let situacao = "aprovada";
    switch (situacao) {
        case "aprovada":
        console.log ("Aprovado!");
        break;

        case "lista":
        console.log ("Lista de espera!");
        break;

        case "reprovado":
        console.log ("Você foi reprovado");
        break;

        default:
        console.log ("Valor não identificado")   
    }