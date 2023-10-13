function solution(num_list) {
    let sum = 0;
    let mult = 1;
    for (let i=0; i < num_list.length ;i++) {
        sum += num_list[i];
        mult *= num_list[i];
    }
    if (mult < Math.pow(sum, 2)) {
        return 1
    } else {
        return 0
    }
}