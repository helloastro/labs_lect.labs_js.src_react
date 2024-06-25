/* 리터럴 */
var calc = {
    a: 1,
    b: 2,
    add: function() {
        return this.a + this.b;
    }
}

console.log(calc.add());
console.log('---------------------------');

var calc2 = {};
calc2.a = 1;
calc2.b = 2;
calc2.add = function() { return this.a + this.b; }
console.log(calc2.add());

console.log('add' in calc2);
delete(calc2.add);
console.log('add' in calc2);
console.log('---------------------------');

/* 생성자 */
function calc3(a, b) {
    this.a = a;
    this.b = b;
}
calc3.prototype.add = function() {
    return this.a + this.b;
}

let obj3 = new calc3(1, 2);
console.log(obj3.add());

let obj4 = new calc3(3, 4);
console.log(obj4.add());
console.log('---------------------------');

var a = {
    p_a: 'a',
    m_a: function() {
        console.log('a 메서드');
    }
}

var b = {
    __proto__:a,
    p_b: 'b',
    m_b: function() {
        console.log('b 메서드');
    }            
}
b.m_a();
b.m_b();