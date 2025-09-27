    function solution(nums) {
        let number = nums.filter((el, idx) => nums.indexOf(el) === idx).length
        return nums.length / 2 < number ? nums.length / 2 : number
    }