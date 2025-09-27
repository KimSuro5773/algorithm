function solution(number, limit, power) {
  let divisors = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisors[j]++;
    }
  }

  divisors = divisors.slice(1);

  return divisors.reduce((acc, cur) => {
    if (cur > limit) {
      cur = power;
      return acc + cur;
    } else return acc + cur;
  }, 0);
}