function solution(s) {
    let answer = [];
    let delLength = 0;
    let idx = 0;
    while(s.length > 1){
        delLength += s.length - s.replaceAll("0", "").length;
        s = s.replaceAll("0", "").length.toString(2);
        idx++;
    }
    return [answer] = [idx, delLength];
}