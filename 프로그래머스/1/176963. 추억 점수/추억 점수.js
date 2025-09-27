function solution(name, yearning, photo) {
    const array = [];
    let sum = 0;
    photo.forEach(el => {
        el.filter(names => {
            name.forEach((el, idx)=> {
                el === names ? sum += yearning[idx] : 0
            })
        })
        array.push(sum)
        sum = 0;
    });
    return array;
}