function solution(numbers) {
    let number = []
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(j !== i) {
                number.push(numbers[i] + numbers[j]);
            }  
        }
    }
    return number.filter((el, idx) => number.indexOf(el) === idx).sort((a, b) => a - b)
}