// 변수
console.log(console);
//var console = '가나다라';
//console.log(console);

let pi = 3.141592654;
let radious = 10;
console.log(`둘레: ${2*pi*radious}`);
console.log(`넓이: ${pi*radious*radious}`);

console.log(10 + 20); // constant pooling

console.log('---------------------------');

// 자바스크립트 데이터 타입
console.log(typeof(10));
console.log(typeof(10.1));
console.log(typeof('12345'));
console.log(typeof(true));
console.log(typeof(function() {}));
console.log(typeof({ }));
console.log(typeof([ ]));
console.log(typeof(aaaa));

console.log(1 + '2');
console.log('1' + 2);
console.log('1' / 2);

// 문자열
console.log('안녕하세요'[0]);
console.log('안녕하세요'[1]);
console.log('안녕하세요'[3]);

// 템플릿 문자열
console.log(`1+2=${1+2}`);

var today = new Date().getFullYear();
console.log(`올해는 ${today}년 입니다.`);

console.log('---------------------------');

// 대입-증감연산자
var num = 10;
console.log(num++);
console.log(num);
var num = 10;
console.log(++num);
console.log(num);

let num1 = 10;
console.log(num1--);
console.log(num1);
let num2 = 10;
console.log(--num2);
console.log(num2);

// 논리, 비교산자
console.log('273' == 273);
console.log('273' === 273);

true || console.log('실행1');  // 단축평가
false || console.log('실행2');

true && console.log('실행1');  // 단축평가
false && console.log('실행2');

console.log('---------------------------');

// 형변환
console.log(Number('1') + 2);
console.log(Number(true) + 2);
console.log(Number('abcd'));
console.log(Number('123abcd'));
console.log(isNaN(Number('123abcd')));

// 구조분해할당 (destructing) - 튜플과 비슷
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

var [a=0, b=0, c=0] = [1, 2];
console.log(a, b, c);

var { pro1, pro2, pro3 } = {
    pro1 : 1,
    pro2 : 'str',
    pro3 : true
};
console.log(pro1, pro2, pro3);

var { pro1=0, pro2='str', pro3=true } = {};
console.log(pro1, pro2, pro3);

var d = [1, 2, 3];
var [a, b, c] = d;
console.log(a, b, c);
