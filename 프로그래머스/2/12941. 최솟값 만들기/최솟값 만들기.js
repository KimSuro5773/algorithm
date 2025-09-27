function solution(a, b){
    let sum = 0;
    let number1 = [...a.sort((a, b) => a - b)];
    let number2 = [...b.sort((a, b) => b - a)];
    number1.forEach((el, idx) => sum += el * number2[idx]);
    return sum;
}