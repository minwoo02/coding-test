function solution(numbers) {
    let answer = numbers;
    for(i=0; i < answer.length; i++) {
        answer[i] = answer[i] * 2;
    }
    return answer;
}