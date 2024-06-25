// 기본함수
console.log(add1(10, 20));
function add1(a, b) {
    return a+b;
}

console.log(add1(10));
console.log('---------------------------');

// 기본 매개변수
function add2(a, b=0) {
    return a+b;
}
console.log(add2(10));
console.log(add2(10,20));
console.log('---------------------------');

// Arguments 객체
function add3() {
    var c=0;
    for (i=0, cnt=arguments.length; i < cnt; i++) {
        c += Number(arguments[i]);
    }
    return c;
}
console.log(add3(10));
console.log(add3(10, 20));
console.log(add3(10, 20, 30, 40, 50));
console.log('---------------------------');

// Rest Operator(나머지 매개변수)
function add4(...a) {
    var c=0;
    for (i=0, cnt=a.length; i < cnt; i++) {
        c += Number(a[i]);
    }
    return c;
}
console.log(add4(10));
console.log(add4(10, 20));
console.log(add4(10, 20, 30, 40, 50));
console.log('---------------------------');

function add4(...a) {
    var c=0;

    for (var i=0, cnt=a.length; i < cnt; i++) {
        c += a[i];
    }
    
    c = 0;
    for (var i in a) {  // index, key(property) 추출
        c += a[i];
    }
    
    c = 0;
    for (var v of a) {  // value 추출
        c += v;
    }
    
    c = 0;    
    a.forEach((i) => c += i);
    
    return c;
}
console.log(add4(10));
console.log(add4(10, 20));
console.log(add4(10, 20, 30, 40, 50));
console.log('---------------------------');

function add5(a, b, ...f) {
    var c = 0;
    f.forEach((x) => c += x(a, b));
    return c;
};

console.log(add5(10, 20, (a,b)=>a+b, (a,b)=>a-b));
console.log(add5(10, 20, function(a,b) { return a+b }, function(a,b) { return a-b }));
console.log('---------------------------');

// Spread Operator(전개 구문)
let arr = [1, 2, 3, 4, 5]; 
console.log(...arr);
// 1 2 3 4 5

var str = 'hello'; 
console.log(...str);

// Spread Operator도 Rest Operator와 마찬가지로 ...의 작성 순서에 주의해야 한다
var obj = {name: '홍길동', addr: '서울'};
obj = {...obj, age: 20}; 
console.log(obj)
// {name: "홍길동", addr: "서울", age: 20}

obj = {...obj, name: '고길동', age: 30};
console.log(obj);
// {name: "짱아", species: "human", age: 11}

console.log('---------------------------');
/*
비구조화 할당 (Destructuring Assignment)
매개변수 목록 내 비구조화 (배열도 적용가능. 튜플과 성질이 비슷하다.)
    - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식(expression)
*/
function circle(a, r) {
    console.log(a.x, a.y, r);
}
circle({x:10, y:20}, 100);

/* 기본값 할당. {center={x:0, y:0}, radius=0} = {} : 값이 대입되지 않아 기본값으로 초기화 */
function circle1({a={x:0, y:0}, r=0} = {}) {
    console.log(a.x, a.y, r);
}

circle1(); 
circle1({a:{x:10, y:20}, r:100});
console.log('---------------------------');

/* 즉시 호출 함수 (Immediately-invoked function) */
(function add(a, b) {
    console.log("12. " + (a+b));
})(2, 3);
console.log('---------------------------');

//arguments.callee() 함수 자기 자신을 반환한다.
//Function 생성자 사용
var Message = new Function("console.log(arguments.callee.text);");
Message.text = "Hello Javascript!!!";
Message();