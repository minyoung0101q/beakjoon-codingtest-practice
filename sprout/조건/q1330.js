const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" "); //입력값을 공백을 기준으로 나눔

const A = parseInt(inputData[0]); //입력받은 값 중 첫번째
const B = parseInt(inputData[1]); //입력받은 값 중 두번째

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}

/*
이 코드도 가능
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}

*/

/* 문제: 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오. 
입력: 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

출력: 첫째 줄에 다음 세 가지 중 하나를 출력한다.
A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.

제한: -10,000 ≤ A, B ≤ 10,000

예제 입력 1
1 2

예제 출력 1
<
*/
