function solution(k, m, score) {
    const answer = [...score].sort((a, b) => b - a);
    const array = [];
    let sum = 0;
    // m길이 만큼의 배열 자르기
    for(let i = 0; i < answer.length; i+=m) {
      if(answer.length >= i + m) array.push(answer.slice(i, i + m))   
    }
    // 각 배열 최소값 구하기
    array.map(el => sum += Math.min(...el) * m)
    return sum
}