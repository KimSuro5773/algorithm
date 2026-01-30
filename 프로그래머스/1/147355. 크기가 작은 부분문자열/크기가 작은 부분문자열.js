function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        let sliceNumber = t.slice(i, i + p.length);
        Number(p) >= sliceNumber ? answer++ : 0;
    }
    return answer
}