function solution(k, score) {
    const array = [];
    const answer = [];
    score.map(el => {
        if(array.length != k) {
            array.unshift(el)
            array.sort((a, b) => b - a)
            answer.push(array.at(-1))
            console.log(`array : ${array}`)
        } else {
            array.unshift(el)
            array.sort((a, b) => b - a)
            array.pop()
            answer.push(array.at(-1))
        }
    })
    return answer
}