function solution(s) {
  return [...s.split(" ")].reduce((acc, cur, idx, arr) => {
    if (cur === "Z") {
      return Number(acc) - arr[idx - 1];
    } else {
      return Number(acc) + Number(cur);
    }
  }, 0);
}
