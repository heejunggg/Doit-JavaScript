/*
1. 프롬프트에서 입력값 받는다.
2. 식으로 변환한다.
3. 실수로 받는다.

*/

//섭씨 : celsius, 화씨 : fahrenheit
//계싼법,  섭씨온도=(화씨온도 - 32) / 1.8

// let fah = prompt("화씨온도를 입력해주세요");
// let cel = (fah - 32) / 1.8;  //변수선언과 할당 동시에..
// console.log(cel);

// let p = parseInt(cel);

// // document.write(p);
// alert(`화씨온도 ${fah}섭씨온도는 ${p} 입니다.`);

/*책에서는 아래처럼.*/
let fah = prompt("화씨온도를 입력해주세요");
let cel; // 선언
cel = ((fah - 32) / 1.8).toFixed(2); //변수할당

alert(`화씨온도${fah}는 섭씨온도 ${cel}입니다.`);
