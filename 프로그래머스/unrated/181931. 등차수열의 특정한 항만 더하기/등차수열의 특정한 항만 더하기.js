function solution(a, d, included) {
    let Array = [a];
    let result = 0;
    for (let i=0; i < included.length; i++) {
        Array.push(Array[i] + d)
        if (included[i] === true) {
            result += Array[i]
        }
    }
    return result;
}