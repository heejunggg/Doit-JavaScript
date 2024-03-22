/*
const bttn = document.querySelector(".button");

function display() {
  alert("클릭했습니다.");
}
bttn.addEventListener("click", display);
*/

// const bttn = document.querySelector(".button");

// bttn.addEventListener("click", () => {
//   alert("클릭했습니다.");
// });

//콜백함수를 만들자.

//1. 프롬프트창에서 값을 입력 받아 알림창을 표시하는 함수를 만들자
//2. 그 함수를 인수로 받는 또 하나의 함수를 정의하고 그 안에서 콜백함수를 실행해 보자

//1. 이름과 나이를 묻는 함수 선언! 만들기
/*
function showDate(name, age) {
  alert(`안녕하세요 ${name}님, 나이가 ${age}살이군요`);
}

//2. 프롬프트창에서 값을 받는 getData()함수를 선언
function getDate(callback) {
  let userName = prompt("이름을 입력하세요");
  let userAge = prompt("나이를 입력하세요");
  callback(userName, userAge);
}
getDate(showDate);

아래코드 참고
*/
/* 1.
function main(x) {
  console.log(x);
}

function sayHi() {
  console.log("안녕");
}
main(sayHi);
*/

/* 2.
function main(x){
  x();
}
function sayHi() {
  console.log("안녕");
}
main(sayHi);
*/

/* 3.
function main(x) {
  console.log("준비작업");
  x();
  console.log("정리작업");
}

function sayHi() {
  console.log("안녕");
}

함수호출 - 첫번쨰 표현식
main(sayHi);
*/

/*
함수호출 - 두번쨰 표현식 == 매개변수가 없으면 빈공간으로 ( ) --화살표
main(() => {
  console.log("안녕");
});
*/

/*
함수호출 - 함수내용이 한줄일경우는 중괄호 {  }생략해도 된다.
main(() => console.log("안녕"));
*/

/* 다른 콜백함수 -엘리가 정의
console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");
*/

function add(a, b) {
  return a + b;
}

let sum = add;
sum(1, 2);
