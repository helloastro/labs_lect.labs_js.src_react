// 클로저(Closure) 디자인 패턴
// 함수선언식
function cnt1() {
    var count = 0;
    return count++;
}

console.log(cnt1());
console.log(cnt1());

var count = 0;
function cnt2() { 
    return count++;
}
count = 100 // side effect

console.log(cnt2());
console.log(cnt2());

function cnt3() {
    var count = 0;
    return function() {
        return count++;
    }
}

// 함수표현식
let cl = cnt3();
console.log(cl());
console.log(cl());

let cl2 = cnt3();
console.log(cl2());
console.log(cl2());
console.log('---------------------------');

/*
메모이제이션(memoization) 패턴
    - 결과를 메모리에 저장하여 필요할 경우 저장된 결과를 이용하여 실행 속도를 높이는 코딩 기법을 말한다. (결과 캐쉬)
    - 반복된 연산에 많이 이용된다.
*/
// 피보나치 행렬 : 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 앞 숫자와 누적합
let cnt = 0; // 반복횟수

function fib(n) { // n이 최대값이 된다.
    cnt++;
    if (n < 2) return n;

    return fib(n-1) + fib(n-2); // 중복 연산이 발생된다. 
    /*
                     [5]
              [4]            [3]
         [3]       [2]    [2]   [1]
      [2]   [1]   [1][0] [1][0]
     [1][0]
    */
}

let r = fib(5);
console.log(cnt, r);

let result = [];
cnt = 0;

function fib2(n) {
    cnt++;
    if (n < 2) result[n] = n;

    if (result[n] == undefined)   // result의 값이 없을 경우만 실행
        result[n] = fib2(n-1) + fib2(n-2);
    
    return result[n];
    /*
    5. undefined
    4. undefined
    */
}

r = fib2(5);
console.log(cnt, r, result);
console.log('---------------------------');