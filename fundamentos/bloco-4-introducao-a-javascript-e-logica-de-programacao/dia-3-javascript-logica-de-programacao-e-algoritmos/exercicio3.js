let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorstring = '';
let menorstring = 'dhsauidhsuidhs';
for (let i = 0; i < array.length; i += 1) {
    if ((array[i].length) > maiorstring.length) {
        maiorstring = array[i];

    }
}

console.log(maiorstring);

for (let i = 0; i < array.length; i += 1) {
    if ((array[i].length) < menorstring.length) {
        menorstring = array[i];

    }
}
console.log(menorstring);