function solution(n) {
    let sum = "";
    for(let i = 1; i <= n; i++) {
        i % 2 == 0 ? sum += "박" : sum += "수";
    }
    return sum;
}