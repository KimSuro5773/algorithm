function solution(new_id) {
  let answer = stage1(new_id);
  answer = stage2(answer);
  answer = stage3(answer);
  answer = stage4(answer);
  answer = stage5(answer);
  answer = stage6(answer);
  answer = stage7(answer);
  return answer;
}

const stage1 = (str) => {
  return str.toLowerCase();
};

const stage2 = (str) => {
  return str.replace(/[^a-z0-9\-_.]/g, "");
};

const stage3 = (str) => {
  return str.replace(/\.{2,}/g, ".");
};

const stage4 = (str) => {
  return str.replace(/^\.|\.$/g, "");
};

const stage5 = (str) => {
  return str === "" ? "a" : str;
};

const stage6 = (str) => {
  let result = "";
  if (str.length >= 16) {
    result = str.slice(0, 15);

    result = stage4(result);

    return result;
  }

  return str;
};

const stage7 = (str) => {
  if (str.length <= 2) {
    return str.padEnd(3, str[str.length - 1]);
  }

  return str;
};