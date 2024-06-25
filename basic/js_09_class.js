/*
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
*/
// 일반적인 상황과 특별한 상활을 상속을 이용하여 합쳐서 100%를 만든다.
// 일반적인 상황(80%)을 표현 - 다각형
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // set area(param)
    get area() {
        return this.height*this.width;
    }

    print() {
        console.log('면적:'+this.area);
    }
}

let poly = new Polygon(10, 20);
console.log(poly.area);
poly.print();

// 일반적인지 않은 특별한 상황(10%) - 정사각형
class Square extends Polygon {
    constructor(length) {
        super(length, length);
    }
}

let squ = new Square(10);
console.log(squ.area);
squ.print();

// 일반적인지 않은 특별한 상황(10%) - 정삼각형
class Triangle extends Polygon {
    constructor(height, width) {
        super(height, width);
    }

    get area() {
        return (this.height*this.width)/2
    }
}

let tri = new Triangle(2, 3);
console.log(tri.area);