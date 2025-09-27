function solution(n, m, section) {
  let answer = 0;
  let wall = 0;

  for (const sectionValue of section) {
    if (sectionValue > wall - 1) {
      wall = m + sectionValue;
      answer += 1;
    }
  }

  return answer;
}
