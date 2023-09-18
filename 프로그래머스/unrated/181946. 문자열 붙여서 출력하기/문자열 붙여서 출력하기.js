const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    str12 = str1 + str2
    // console.log(str12.replace(" ", "")) //replace사용
    console.log(str12.trim()) // trim 사용
});