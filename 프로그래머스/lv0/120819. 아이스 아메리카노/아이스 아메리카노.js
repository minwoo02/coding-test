function solution(money) {
    const americano = Math.floor(money / 5500)
    const remind = money % 5500
    return [americano, remind]
}