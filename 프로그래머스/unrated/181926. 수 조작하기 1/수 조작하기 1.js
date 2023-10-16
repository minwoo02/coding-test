function solution(n, control) {
    for (let i=0; i < control.length; i++) {
        if (control.substr(i, 1) === "w") {
            n += 1;
        } else if (control.substr(i, 1) === "s") {
            n -= 1;
        } else if (control.substr(i, 1) === "d") {
            n += 10;
        } else if (control.substr(i, 1) === "a") {
            n -= 10;
        } else {
            return n;
        }
    }
    return n;
}