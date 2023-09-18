function solution(numbers) {
    let answer = [];
    for(i=0; i < numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }
    return answer;
}

//map 사용하기
// const solution = (numbers) => numbers.map((number) => number * 2)

//reduce 사용하기
/*
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
*/
