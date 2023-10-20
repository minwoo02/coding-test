function solution(n) {
    let gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let lcm = (a, b) => a * b / gcd(a, b);
    return lcm(n, 6) / 6; 
}