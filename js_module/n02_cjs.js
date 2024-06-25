// default

const a1 = require('#labs/cjs/cjs01.js');
console.log(a1);

const fnA2 = require('#labs/cjs/cjs02.js');
fnA2();

const objA3 = require('#labs/cjs/cjs03.js');
console.log(objA3.a);
objA3.fnA();
console.log('==================================');

// named
const mA = require('#labs/cjs/cjs04.js');
console.log(mA.a);
mA.fnA();

const { a, fnA } = require('#labs/cjs/cjs04.js'); // 객체 구조 분해 할당
console.log(a);
fnA();

console.log('==================================');

const { m_a, m_fnA } = require('#labs/cjs/cjs05.js');
const { m_a2 } = require('./modules/cjs/cjs05');
console.log(m_a);
m_fnA();
console.log(m_a2);

console.log('==================================');

if (a1 > 0) {
    const a2 = require('#labs/cjs/cjs01.js');
    console.log(a2);
}
