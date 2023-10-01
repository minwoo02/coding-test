function solution(a, b) {
    const x = (a).toString();
    const y = (b).toString();
    if (Number(x + y) > Number(y + x)) {
        return Number(x + y)
    } else {
        return Number(y + x)
    }
}