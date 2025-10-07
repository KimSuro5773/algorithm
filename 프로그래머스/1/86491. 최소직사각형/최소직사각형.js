function solution(sizes) {
    const 가로 = [];
    const 세로 = []; 
    sizes.map((value, idx) => {
        가로[idx] = Math.max(...value);
        세로[idx] = Math.min(...value);
    });
    return Math.max(...가로) * Math.max(...세로);
}