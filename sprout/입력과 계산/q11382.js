const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a + b + c);

/*
trim() => 
trim()은 문자열의 양쪽 끝에서 공백(스페이스, 탭, 개행 등)을 제거하는 문자열 메서드입니다. 이 메서드를 사용하면 문자열의 시작과 끝에 있는 공백을 제거하여 정리된 문자열을 얻을 수 있습니다.
*/

/*
Q11382 : 꼬마 정민
문제 : 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!
입력 : 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.
출력 : A+B+C의 값을 출력한다.
예제 입력 : 77 77 7777
예제 출력 : 7931
*/
