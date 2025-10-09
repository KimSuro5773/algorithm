function solution(s) {
    let charSet = s.split(" ");
    return charSet.map(char => {
        let str = "";
        for(let i = 0; i < char.length; i++) {
            i % 2 == 0 ? str += char[i].toUpperCase() : str += char[i].toLowerCase();
        }
        return str;
    }).join(" ");
}