function solution(keyinput, board) {
  let answer = ["up", "down", "left", "right"];
  let newBoard = [0, 0];

  keyinput = keyinput.join("");
  answer.forEach((el, idx) => {
    keyinput = keyinput.replaceAll(el, idx);
  });

  [...keyinput].forEach((el) => {
    switch (el) {
      case "0":
        (board[1] - 1) / 2 <= newBoard[1] ? newBoard[1] : (newBoard[1] += 1);
        break;
      case "1":
        -(board[1] - 1) / 2 >= newBoard[1] ? newBoard[1] : (newBoard[1] -= 1);
        break;
      case "2":
        -(board[0] - 1) / 2 >= newBoard[0] ? newBoard[0] : (newBoard[0] -= 1);
        break;
      case "3":
        (board[0] - 1) / 2 <= newBoard[0] ? newBoard[0] : (newBoard[0] += 1);
        break;
    }
  });

  return newBoard;
}