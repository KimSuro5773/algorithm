function solution(s) {
    let answer = [];
    answer = [...s.toLowerCase().replace(/^[a-z]/, char => char.toUpperCase())];
    s.split("").map((value, idx) => {
        if(answer.length -1 === idx) return
        if(value.match(" ")) answer.splice(idx + 1, 1, s[idx + 1].toUpperCase())
    })
    return answer.join("")
}

