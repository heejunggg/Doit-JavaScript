/*
 인치단위를 센티미터 단위로 변환하기
 1. 1인치 - 2.54센티미터.
 2. 변수 인치
 3. 변수 센티미터
*/

let inch = prompt("인치를 입력하시오.");
let cm; //변수선언
cm = (inch * 2.54).toFixed(3);

console.log(cm);

document.write(`${inch}는 ${cm}미터입니다. 잘했어요.`);
