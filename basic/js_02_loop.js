// 배열
let ary = [100, 200, 300, 400, 500];
for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}
console.log('---------------------------');

for (let i = 0, cnt = ary.length; i < cnt; i++) {
    console.log(ary[i]);
}
console.log('---------------------------');

function output(item) {
    console.log(item);
}
ary.forEach(output);
console.log('---------------------------');

ary.forEach(function (item) {
    console.log(item);
});

/*
[100, 200, 300, 400, 500].forEach(function(item) {
    console.log(item);
});
*/

let log = function (item) {
    console.log(item);
};

let doc = function (item) {
    // document.write(item);
    console.log('-', item);
};

ary.forEach(log);
ary.forEach(doc);

console.log('---------------------------');

ary.forEach((item) => console.log(item));
console.log('---------------------------');

[100, 200, 300, 400, 500].forEach((item) => console.log(item));
console.log('---------------------------');

ary.map((n) => n * 2).forEach((item) => console.log(item));
console.log('---------------------------');

let ary1 = [1, 2, 3, 4, 5];
ary1.forEach((x) => console.log(x));

ary1.filter((x) => x % 2 == 0).forEach((x) => console.log(x));

ary1.map((x) => x * 2).forEach((x) => console.log(x));

let total = ary1.reduce((tot, x) => tot + x);
console.log(total);

// 짝수의 합을 구하세요.
total = ary1.filter((x) => x % 2 == 0).reduce((tot, x) => tot + x);
console.log(total);

let result = ary1.some((x) => x < 3);
console.log(result);

result = ary1.every((x) => x < 3);
console.log(result);

console.log('---------------------------');

// 유사배열
// 배열처럼 보이지만 사실 key가 숫자이고 length 값을 가지고 있는 객체를 말한다.
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
};

for (var idx in obj) {
    console.log(obj[idx]);
}
console.log('---------------------------');

obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};

Array.from(obj).forEach((value, key) => console.log(value));
console.log('---------------------------');

// scope
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();

// 호이스팅
fn2();

function fn2() {
    console.log('fn2');
}
