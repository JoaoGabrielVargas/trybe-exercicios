let word = 'tryber';
let newword = '';

for (let i = word.length - 1; i >= 0; i -= 1){
    newword += word [i];
}

console.log(newword);