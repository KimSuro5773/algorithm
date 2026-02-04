function solution(price, money, count) {
    let answer = [];
    let sum = 0;
    for(let i = 1; i <= count; i++){
        answer.push(price * i);
        sum += answer[i - 1];
    }
    return money - sum < 0 ? sum - money : 0;
}