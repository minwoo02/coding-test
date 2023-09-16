const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    if (isNaN(n)) {
         //n이 숫자가 아니면
        console.log("반복횟수n은 올바른 숫자가 아닙니다.")
    } else {
        const repeatedStr = repeat(str, n);
        console.log(repeatedStr)
    }
});


function repeat(str, n) {
    let repeatedStr = '';
    
    for (let i =0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}