function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); //최대공약수 구하기
    const x = denom1*denom2
    const y = (numer1*denom2) + (numer2*denom1)
    const common = gcd(y, x);    
    answer = [y/common, x/common ];
    return answer;
}