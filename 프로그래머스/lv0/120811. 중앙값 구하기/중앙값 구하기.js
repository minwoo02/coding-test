function solution(array) {
    const sortArray = array.sort((a, b) => a-b);
    return sortArray[(sortArray.length - 1) / 2];
}