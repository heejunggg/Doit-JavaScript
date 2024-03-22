// //문제 )  1 ~10까지 더하기

// /*
// 1. 변수 : 0;
// 2. for를 이용해서 돌아가면서 돌게하기.
// 3. console.log로 나오게 하기
// */

// // function caclSum() {
// //   //함수선언
// //   let sum = 0;
// //   for (let i = 1; i <= 10; i++) {
// //     // sum = sum + i;
// //     sum += i;

// //     //    i+sum=sum
// //     //    1+0=1
// //     //    2+1=3 ---> 1더하기 2를 하면 3이므로 sum
// //     //    3+2=5
// //   }
// //   console.log(`1부터 10까지의 합은${sum} 이다.`);
// // }
// // caclSum(); //함수실행

// //매개변수
// // function sum(a, b) {
// //   let result = a + b;
// //   alert(`두수의 합은 ${result}입니다.`);
// // }
// // sum(10, 20); //10,20을 인수라고 한다.

// //인수
// /*
// caclSum()함수에도 매개변수를 넣어서 수정
// 1부터 n 까지 더하고싶을때 함수에 n을 넣으면
// */

// // function caclSum(n) {
// //   let sum = 0;
// //   for (let i = 1; i <= n; i++) {
// //     sum = n + i;
// //     // 0+1 = 1
// //     // 1+2=3
// //     // 3+3=6
// //   }
// //   console.log(`1부터 ${n}까지의 합은 ${sum}`);
// // }
// // caclSum(100);

// // function calcSum(num) {
// //   //함수선언만..
// //   let sum = 0;
// //   for (let i = 0; i <= num; i++) {
// //     sum += i;
// //   }
// //   return sum; //함수 내부로 해야한다.!!
// // }

// // //화면에 표시하기.
// // //화면에 표시하려면. prompt창에 입력한값이 넘어오게..그럼 그 값을 받는 변수가 필요하겠찌.
// // //그리고 화면에 받았떤 num을 함수 calcSum의 인자로 받아서 함수를 실행하게 한다.

// // let num = parseInt(prompt("숫자를 입력하세요"));
// // document.write(`1부터 ${num}까지의 합은 ${calcSum(num)}이다.`);
// //----------------------------------------------------------------------------------------------------------

// // 문제 : 두수를 받아서 곱하고, 결괏값을 반환하는 함수를 만든 후 , 10과 20을 곱한 결괏값을 콘솔창에 표시하는 소스작성.

// // 1. 함수()선언--> 인자
// // 2. for문
// //3. return 결괏값
// //4. 콘솔창에 표시

// function ggob(a, b) {
//   return a * b;
// }
// /* 첫번쨰 시도;;;; 아님..
// 하나의 수도 아닌, 두수를 prompt창에서 어떻게 받지?
// let num = psrseInt(prompt("두수를 입력하세요.a, b"));???
// */

// let muilt = ggob(10, 20);

// console.log(muilt);
// document.write(`두수의 곱은 ${muilt}이다.`);

//-------------함수 표현식-----------------------

//1. 변수에 할당해서 사용하는 익명함수

/*
let sum = function (a, b) {
  return a + b;
};
console.log(`함수 실행결과 : ${sum(10, 20)}`);
*/

//2. 즉시 실행함수

/*
(function(매개변수){
  ...
}(인수));

(function (a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(100, 200);
*/

//3. 화살표함수
/*
  (매개변수) => {함수내용}
*/

//화살표 함수로 변환
//1.매개변수가 없을때
/*
let h1 = function(){
  return `안녕하세요?`;
}
h1();
화살표 함수로 변환 ===>

let h1 = () => `안녕하세요`;
h1();
*/

//2. 매개변수가 한개 있을때 : 매개변수의 소괄호를 생략해서 사용할 수 있다.
/*
let hi = function(user){
  console.log(`${user}님, 안녕하세요?`);
}
hi("홍길동");

화살표함수로 변환--->

let hi = user => console.log(`${user}님,안녕하세요?`);
hi("홍길동");
*/

//2-1. 함수에서 실행할 명령이 한 줄뿐이라면 중괄호를 { }를 생략할 수 있다.

//3. 매개변수가 두개 있을때 :
/*
let sum = function(a,b){
  return a + b;
}
sum(10,20);

---> 화살표함수로 변환
let sum = (a,b) =>  a + b;
sum(10,20);
*/

// 문제 ; 화살표를 사용해 두 수를 받아서 곱하는 함수를 정의한 후 10과 20을 곱한 결괏값을 콘솔창에 표시해보세요.
/*
let muilt = function(a,b){
  return a + b;
  console.log(`두수의 곱은 ${muilt}`);
}
muilt(10,20);

---> 화살표로 정의
*/
let muilt = (a, b) => {
  return a + b;
  console.log(`두수의 곱은 ${muilt}`);
};
muilt(10, 20);

let multiple = (a, b) => a * b;

console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);
