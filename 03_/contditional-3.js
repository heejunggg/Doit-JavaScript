/*
프롬프트 창에서 입력한 점수를 받아서  90점 이상이면 A학점을.
80점 이상이면 B학점을, 
그외 점수는 C학점을 주는 예제
*/

/*
1. 프롬프트 에서 입력받은 값 변수지정 t
2. if t > 90점 // else if t > 80점 // else  t == c
*/
//아래 내가 작성
// let promtT = prompt("희정! 점수를 입력하세요");

// if (promtT > 90) {
//   alert("90점이 넘었으므로 A이네요!!");
// } else if (promtT > 80) {
//   alert("80점이 넘었으므로 B이네요!!");
// } else {
//   alert("C이네요!!");
// }

/*책 정답*/
// let score = prompt("프로그래밍점수 : ");

// if (score != null) {
//   if (parseInt(score) >= 90) {
//     alert("A학점");
//   } else if (parseInt(score) >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

/* 짝수와 홀수 프로그램 만들기*/

//사용자가 입력한 숫자를 userNumber에 할당한 후 짝수인지, 홀수인지 구별하는예제

/*
1. prompt로 입력한 숫자 변수로 할당.
1-1. 짝수 홀수를 어떻게 구별
    (num % 2 == 0) 2로 나누었을떄 0 이면 짝수. 

2. prompt변수가 null이 아니라면 아래 if문 실해
3. null이라면. 입력하세요 alert로 출력
*/

// let userNumber = prompt("점수를 입력하세요");

// if (userNumber != null) {
//   if (userNumber % 2 == 0) {
//     alert("짝수입니다.");
//   } else if (userNumber % 2 > 0) {
//     alert("홀수입니다.");
//   }
// } else {
//   alert("점수를 입력하셔야 합니다.");
// }

//위의 코드를 조건연산자를 이용해서 코드를 써보자.
/*
조건연산자
변수 = (조건) ? true일떄 실행할 명령 : false일떄 실행할 명령
*/

// let userNumber = prompt("점수를 입력하세요");
// if (userNumber != 0) {
//   userNumber = parseInt(userNumber); // null아니면 정수로 반환합니다.

//   userNumber % 2 == 0
//     ? alert(`${userNumber}짝수입니다.`)
//     : alert(`${userNumber}홀수입니다.`);
// }

/*switch*/
//1번을 선택했습니다, 2번 선택했습니다. 3번 선택했습니다. 나오게 하기.

// let subject = prompt("신청할 과목을 선택하세요. 1-html, 2-css, 3-javascript");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       document.write("html을 선택하셨네요");
//       break;
//     case "2":
//       document.write("css를 선택하셨네요");
//       break;
//     case "3":
//       document.write("javascript를 선택하셨네요");
//       break;
//     default:
//       document.write("잘못 입력했습니다. 다시 입력해주세요.");
//   }
// }

/*다음은 입력한 2개의 숫자가 모두 짝수인지 체크하는 예제
논리연산자
true && true

1. 하나의 숫자--변수
2. 두번째 숫자--변수
3. 만약 하나의 변수가 짝수이고. 두번째변수도 짝수이면.alert ("두수모두 짝수입니다")
짝수의 판단 = 변수 %2 == 0
*/

// const num1 = parseInt(prompt("첫 번째 양의정수:"));
// const num2 = parseInt(prompt("숫자를 입력해주세요."));
// let str; //변수선언

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//   str = "두 수 모두 짝수입니다."; //할당
// } else {
//   str = "짝수가 아닌 수가 있습니다.";
// }
// alert(str);

/* ========================== for 문 ===========================
                  for( 초기값; 조건; 증가식)

*/

// const students = ["park", "kim", "Lee", "kang"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students);
//   document.write(`${students[i]}`);
// }

//예제

/* 내가 좋아하는 색상을 'color'라는 배열에 저장한 후 for문을 사용해 화면에표시하시오*/
//for(초기값; 조건; 증가식)

// const color = ["pink", "blue", "skyblue"];

// for (let i = 0; i < color.length; i++) {
//   document.write(`${color[i]}`);
// }

/*================ forEach 문 ================================
              배열명.forEach(콜백함수) {.....}

*/

//forEach문으로 배열값 가져오기

// const students = ["park", "kim", "Lee", "kang"];

// students.forEach(function (student) {
//   document.write(`${student}.`);
// });

/*============ for..in 문 ==================================
          for (변수 in 객체) {.......}

==> for...in문은 객체의 키만 가져올 수 있으므로 해당 키의 값에 접금하려면 대괄호 [ ]를
사용한다. 
*/

// for..in문으로 키와값 가져오기

// const gitBook = {
//   title: "깃 허브 입문", //key : value
//   pubDate: "2019-12-06",
//   pages: 243,
//   finished: true,
// };
// console.log(`${gitBook.title}`); //깃 허브 입문으로 출력

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br>`);
// }

//예제..
/*
  주변에 보이는 하나의 사물을 선택해서 정의한 후 , for..in문으로 키와 값을 화면에
  나타내시오. -키만 가져올수 있으므로, 스타벅스를 예로.
*/

// const starbuck = {
//   title: "나무를 보면서 공부할수 있는 공간", //key : value;
//   date: "2024-03-07",
//   study: "JavaScript",
//   age: "45",
// };

// console.log(`${starbuck.title}`); //객체의 key==>value;

// for (key in starbuck) {
//   document.write(`${key} : ${starbuck[key]}<br>`);
// }

/*======== while 문 / do while 문 =====================
          while(조건) {
            실행할 명령
          }

          do {
            실행할 명령
          } while (조건)
          
*/

// while문으로 조건에 따라 별 표시하기

// let stars = parseInt(prompt("별의 개수 : "));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

//do..while문으로 조건에 따라 별 표시하기

// let stars = parseInt(prompt("별의개수는 : "));

// do {
//   document.write("*");
//   stars--;
// } while (s2ㄹtars > 0);

/*예제 : 사용자가 입력한 숫자가 소수인지 아닌지 판별하시요*/
/*
1. 사용자로 부터 숫자를 입력받는다.
==> 

2. 입력받은 숫자가 1이하이면 바로 '소수가 아니다'라고 판단한다.
==> if(num < 1) ==> 소수가 아니다.

3. 입력받은 숫자가 2이상이면, 2부터 입력한 그 숫자의 -1까지 나눠본다.

==> if(num >= 2) ===> for (let i=2; i<num; i++){
   if(num % 2,3,4 ===0 ) //나누어 떨어지면 이것은 소수가 아니다.
    {
      document.write(`${num}은 소수가 아니다.)
    }else {
      document.write(`${num}은 소수이다.)
    }
}


4. 나눈 결과가 한번이라도 나누어 떨어지면 즉 나머지가 0 이면, 그 숫자는 소수가 아니다.

5. 모든 숫자를 다 나눠봤는데 나누어 떨어지지 않으면 그 숫자는 소수이다

*/

/*
내가 작성
const num = parseInt(prompt("숫자를 입력하세요: "));

if (num <= 1) {
  document.write(`${num}은 소수가 아니다.`);
} else {
  //num이 2부터.이면.

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      document.write(`${num}은 소수가 아니다.`);
      break;
    } else {
      document.write(`${num}은 소수이다.`);
    }
  }
}  아래해답.
*/

const num = parseInt(prompt("숫자를 입력하세요: "));
let isPrime; //소수인지의 여부를 지정한다. true 소수일때 또는 false 소수가 아닐때

if (num === 1) {
  document.write(`${num}은 소수도 합성수도 아니다.`);
} else if (num === 2) {
  //num이 2이면
  isPrime = true; //숫자2는 나누어떨어지므로 소수이다.
} else {
  //그것도 아니라면 즉 num이 3부터라면...
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // document.write(`${num}은 소수가 아니다.`);
      isPrime = false;
      break;
    } else {
      // document.write(`${num}은 소수이다.`); 이부분 잘못.10은소수이다, 10은 소수가 아니다.라고 나옴.
      isPrime = true;
    }
  }

  //isPrime값에 따라 true이면 소수, false이면 소수가 아니다라고 표시하기
  if (isPrime) {
    document.write(`${num}은 소수입니다.`);
  } else {
    document.write(`${num}소수가 아니다.`);
  }
  b;
}
