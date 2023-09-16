const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // 이스케이프 시퀀스를 사용
    console.log("!@#$%^&*(\\'\"<>?:;")
});