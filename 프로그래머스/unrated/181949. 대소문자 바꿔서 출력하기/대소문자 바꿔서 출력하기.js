const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    let result = ''
    
    for (let i = 0; i <str.length; i++) {
        const char = str[i];
        // 알파벳의 Unicode 코드 포인트를 이용
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= "A" && char <= "Z"){
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    
    console.log(result)
});