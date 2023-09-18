function solution(numbers) {
    let answer = numbers;
    for(i=0; i < answer.length; i++) {
        answer[i] = answer[i] * 2;
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
