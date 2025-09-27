function solution(cards1, cards2, goal) {
    const answer = [];
    for(let i = 0; i < goal.length; i++) {
        if(goal[i] === cards1[0]) {
            answer.push(cards1.shift());
        }
        if(goal[i] === cards2[0]) {
            answer.push(cards2.shift());
        } 
    }
    return answer.length === goal.length ? "Yes" : "No"
}
