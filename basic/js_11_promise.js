// Non-Promise
// 비동기식(Asynchronous)
setTimeout(() => {
    console.log('01. 메시지');
}, 1000);
console.log('02. 메시지');
setTimeout(() => {
    console.log('03. 메시지');
}, 500);
console.log('04. 메시지');
console.log('05. 메시지');
console.log('-----------------------------');

// CallBack
function fn(t, callback) {
    setTimeout(callback, t);
}
// 중첩 CallBack
fn(1000, function () {
    console.log('11. 메시지');
    fn(0, function () {
        console.log('12. 메시지');
        console.log('-----------------------------');
    });
});

// 출처: https://ko.javascript.info/async
// 동기식(Synchronous)
// Promise
// - 모든 프라미스 처리는 '프라미스 잡(promise job)'큐('마이크로태스크 큐'(ES8 용어))에 등록되어 처리된다. 따라서 프라미스 비동기로 처리된다.
// - 따라서 then,catchfinally 핸들러는 현재 코드가 처리가 종료되고 난 후에 호출된다.
// - 동기식으로 처리할 비동기식 대상(setTimeout, ajax등)은 프로미스로 선언한다.
/* 
  - new Promise(executor)
    . executor: 실행함수
       - resolve, reject 중 하나를 호출해야한다.
    . Promise 객체를 반환한다.
  - 초기 프로퍼티 > state: pending, result: undefined
  - resolve(value): 성공처리에 호출 함수, 프로퍼티 > state: fulfilled, result: value
  - reject(error): 오류처리에 호출 함수, 프로퍼티 > state: rejected, result: error
  - 소비함수(프라미스)
    . Promise 객체를 전달받는다.
    . .then(result_fn, error_fn)
       - result_fn: 프라미스 허용될 경우 실행될 함수.
       - error_fn: 프라미스 거부될 경우 실행될 함수.
       - 성공적일 경우만 처리 함수 하나만 지정한다.
    . .catch(f):
       - try ~ catch를 암시적으로 처리한다.
       - then(null, error)과 동일하다. 실패할 경우만 처리 
       - reject(new Error('에러가 발생함'))
       - throw new Error('에러가 발생함')
    . .finally(fn)
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('21. 메시지');
        resolve();
    }, 1000);
    //reject('21. Error');
});

p.then(() => console.log('22. 메시지'))
    .then(
        () =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('23. 메시지');
                    resolve();
                }, 500);
            }),
    )
    .then(() => console.log('24. 메시지'))
    .then(() => console.log('25. 메시지'))
    .then(() => {
        throw new Error('26. 에러가 발생함');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('27. 완료됨');
    });

console.log('-----------------------------');

/*
  - 프라미스 API
    . Promise.all([...promises...])
      - 프라미스 객체 배열의 모든 프라미스들을 비동기로 실행한 뒤 프라미스 객체를 반환한다. (병렬)
      - 하나라도 거부가 발생되면 거부된다. (결과가 프라미스 객체이므로 .catch()사용이 가능하다.)
    . Promise.race(iterable)
      - 실행된 첫 번째 프로미스의 결과 또는 첫 번째 오류가 반환한다.
    . Promise.resolve(value) – 지정된 값의 이행 상태 프라미스를 생성.
    . Promise.reject(error) – 지정된 에러의 거부 상태 프라미스를 생성.
*/
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve('31.'), 500)),
    //new Promise((resolve, reject) => setTimeout(() => reject(new Error('32. 에러')), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('32.'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('33.'), 500)),
])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve('41.'), 500)),
    //new Promise((resolve, reject) => setTimeout(() => reject(new Error('42.에러')), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('42.'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('43.'), 500)),
])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

console.log('-----------------------------');

// async와 await
// - 프라미스를 사용할 수 있다.
/*
  - async
    . 함수 앞에서 사용하면 프라미스 객체를 반환한다.
  - await
    . async 내에서 사용된다.
    . 프라미스가 완료될 때까지 기다린다.
    . 정상 처리 완료일 경우 result를 반환한다.
    . 오류가 발생되면 error를 반환한다.
*/
async function fn() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('51. 메시지');
            resolve();
        }, 1000);
        // reject('51. Error'); // try ~ catch 문을 권장
    });
    console.log('52. 메시지');

    // 일반적으로 외부에 await 함수를 만들고 호출에 이용한다.
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('53. 메시지');
            resolve();
        }, 500);
    });

    console.log('54. 메시지');
    console.log('55. 메시지');
}

fn()
    .catch((err) => console.log(err))
    .finally(() => console.log('56. 완료됨'));

const A = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('A');
        }, 100);
    });
};
const B = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('B');
        }, 200);
    });
};
const C = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('C');
        }, 300);
    });
};

async function fn2() {
    await A().then((r) => console.log(r));
    await C().then((r) => console.log(r));
    await B().then((r) => console.log(r));
}
fn2();

// Promise.all을 이용하면 비동기 병렬로 처리된다.
// - 순서가 없는 병렬처리에 이용하면 좋다.
const fn3 = async () => {
    let [a, b, c] = await Promise.all([A(), C(), B()]);
    console.log(a, b, c);
};
fn3();
