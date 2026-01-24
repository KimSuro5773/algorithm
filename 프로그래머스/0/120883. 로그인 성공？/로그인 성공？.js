function solution(id_pw, db) {
  let idMatch = false;
  let pwMatch = false;

  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) idMatch = true;
    if (db[i][1] === id_pw[1]) pwMatch = true;

    if (db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) {
      return "login";
    }
  }
  return idMatch ? "wrong pw" : "fail";
}