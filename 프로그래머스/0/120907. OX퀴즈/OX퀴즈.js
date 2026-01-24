function solution(quiz) {
  let array = quiz.map((el) => {
    let setQuiz = el.split(" ");
    let x = Number(setQuiz[0]);
    let y = Number(setQuiz[2]);
    let answer = Number(setQuiz[4]);

    return setQuiz[1] === "+" ? x + y == answer : x - y == answer;
  });

  return array.map((el) => (el ? "O" : "X"));
}