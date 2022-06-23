let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menornumero = numbers [0];

for (let i = 0; i < numbers.length; i += 1 ){
    if (numbers[i] < menornumero) {
       menornumero = numbers[i];
    }

}

console.log (menornumero);