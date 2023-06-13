const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" "); //입력값을 공백을 기준으로 나눔

const A = parseInt(inputData[0]); //입력받은 값 중 첫번째
const B = parseInt(inputData[1]); //입력받은 값 중 두번째

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B)); //Math.floor : 소수점 없이, 정수만 출력 출력 되어야 함
console.log(A % B);

//런타임 에러 : 변수를 a로 선언했는데 console.log(A) => 이렇게 없는 변수를 사용한다면 error 발생!
