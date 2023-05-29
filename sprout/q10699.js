const date = new Date().toISOString().split("T");
console.log(date[0]);

/*
백준 10699번 문제
서울의 오늘 날짜 출력
입력은 없고, 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력
입력: X
출력: 2015-01-24
*/

/*
객체 Date 활용
split("기준문자") => 기준문자를 기준으로 문자열을 분리해줌
이 문제에서는 T를 기준으로 분리
배열이 나오니 0번째 출력하면 끝 

const: 상수 선언 키워드
*/

/*
mdn 참고
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
*/
