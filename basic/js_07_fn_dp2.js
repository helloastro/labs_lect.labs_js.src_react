/*
커링 함수(currying function) 패턴
 - 클로저를 이용하여 매개변수별로 단항식을 만드는 방법
 - 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것을 말한다
*/
function add(x, y) {
    return x + y;
}

function add1(x) {
    return function(y) {
        return x + y;
    }
}

console.log(add(1, 2));
console.log(add1(1)(2));

function curry(fn) {
    return function(x) {
        return x.map(fn);
    }
}

console.log(curry((x)=>x*x)([1,2,3,4,5]));

console.log('---------------------------');

/*
부분 적용 함수(partially applied function)
- 부분 적용 함수란 n개의 인자를 받는 함수에 미리 m개의 인자만 넘겨 기억시켰다가, 나중에 n-m개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻을 수 있게끔 하는 함수이다.
*/
function partial() {
    let args = Array.from(arguments);
    let fn = args[0];
    let arg1 = args.slice(1, args.length);

    return function() {
        let args2 = Array.from(arguments);
        return fn.apply(null, arg1.concat(args2));
    }
}

function total() {
    let args = Array.from(arguments);
    return args.reduce((prv, item) => prv+item, 0);
}

var partialTotal = partial(total, 1, 2, 3, 4, 5);
console.log(partialTotal(6, 7, 8, 9, 10));
console.log('---------------------------');

// call, apply, bind
/*
foo.call(thisArg[, param1, param2…]), foo.apply(this,[array])
- 적용된 함수에 바인딩 된다.
- 함수가 실행된다.
- thisArg가 변경된다.
foo.bind(thisArg[, param1, param2..]])
- 새로운 함수를 생성하여 반환한다.
- 함수가 실행되지 않는다.
this가 지정되지 않으면 전역객체가 된다.
*/

// call
var obj = {
    attr: 'a'
}

function fn() {
    console.log(this);
}

fn.call();
fn.call(obj);

function fn1(b) {
    this.attr1 = b
    console.log(this);
}
fn1.call(obj, 'b');
console.log(obj);
console.log('---------------------------');

// apply
var obj1 = {
    attr: 'a'
}

fn.apply();
fn.apply(obj1);
fn1.apply(obj1, ['b']);
console.log(obj1);
console.log('---------------------------');

// bind
var obj2 = {
    attr: 'a'
}
var fn21 = fn.bind();
fn21();
var fn22 = fn.bind(obj2);
fn22();
var fn23 = fn1.bind(obj2, ['b']);
fn23();
console.log(obj2);