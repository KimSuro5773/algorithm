function solution(s) {
    const array = []
    const answer = [];
    for(let i = 0; i < s.length; i++) {
        array.lastIndexOf(s[i]) === -1 ? answer.push(-1) : answer.push(i - array.lastIndexOf(s[i]));
        array.push(s[i])
    }
    return answer;
}