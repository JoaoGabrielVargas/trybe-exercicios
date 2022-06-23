let nomePeca = "RAINHA";



    switch (nomePeca.toLowerCase ()) {
        case "peão" :
        console.log ("Anda 1 pra frente, 2 pra frente se for o primeiro movimento");
        break;

        case "bispo" :
        console.log ("Anda na diagonal");
        break;

        case "cavalo" :
        console.log ("Anda em L");
        break;

        case "torre" :
        console.log ("Anda reto");
        break;

        case "rei" :
        console.log ("Anda em todas direções mas só 1 casa");
        break;

        case "rainha" :
        console.log ("Anda em todas direções quantas casas quiser");
        break;

        default : 
        console.log ("Peça inválida!")
}