/**
 * object.html에 포함시킬 것.
 */

// JSON(JavaScript Object Notation): 자바스크립트 객체 표기방법.
// { property: value, ... } 

const person = {
    name: '홍길동',    // name을 프로퍼티(property)라 하고 콜론을 사용한다 꼭. age, phone 도 프로퍼티임.
    age: 16,            // 쉼표의 역할은 프로퍼티와 프로퍼티를 구분하기 위한 것.
    phone: ['010-1234-5678', '02-1234-5678'], // 마지막 프로퍼티에선 쉼표가 필요 없는데, 이렇게 넣어도 상관은 없음.
};
console.log(person);

// 객체가 가지고 있는 프로퍼티에 접근하려면: (1) 참조 연산자, (2) 인덱스 연산자. 두가지 방법이 있음.
console.log(person.name); // 참조 연산자: object.propertyName
console.log(person['age']); // 인덱스 연산자 object['propertyName']
console.log(person.phone);
console.log(person.phone[2]);
console.log(person.phone[0]); // person['phone'][0]

person.age = 17; // 객체의 프로퍼티 값 변경. 재할당.
console.log(person);

// 자바스크립트의 객체는, 객체가 생성된 이후에 프로퍼티를 추가할 수 있음.
person.email = 'hgd@itwill.com';
console.log(person);

// 메서드를 갖는 객체:
const score = {
    html: 100,
    css: 90,
    js: 82,
    sum: function() {
        // 객체의 프로퍼티에 접근할 때는 this 키워드를 사용.
        return this.html + this.css + this.js;
    },
    mean: function() {
        return this.sum() / 3;
    },
};

console.log(score);
console.log(score.sum()); // 메서드 호출
console.log(score.mean());

// 생성자 함수(constructor function): this 키워드를 사용해서 프로퍼티를 선언한 함수
function Score(html, css, js) {
    // 필드
    this.html = html;
    this.css = css;
    this.js = js;

    // 메서드
    this.sum = function() {
        return this.html + this.css + this.js;
    };

    this.mean = function() {
        return this.sum() / 3;
    };
}

// 생성자 함수를 사용한 객체 생성: new 생성자함수();
const score1 = new Score(1, 2, 31);
console.log(score1);
console.log(score1.sum());
console.log(score1.mean());

const score2 = new Score(); // >> 모든 필드는 undefined가 됨.
console.log(score2);
console.log(score2.sum());   // >> 결과가 NaN 로 뜰텐데 Not a Number 라는 뜻임. undefined + undefined = NaN

// 자바스크립트 객체는 for-in 구문에서 사용할 수 있음. -> 프로퍼티 이름들을 iteration.
const student = {
    no: 101,
    name: '오쌤',
    classNo: 10,

};
for (let x in student) {
    console.log(x, ':', student[x]); // student.x 안됨.
}

// 클래스:
class Rectangle {
    // 생성자: 필드 초기화
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // 메서드: function 키워드를 사용하지 않음 !! << 되게 중요
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

// 클래스를 사용한 객체 생성:
const rect1 = new Rectangle(2, 3);
console.log(rect1);
console.log(`넓이 = ${rect1.area()}`);
console.log(`둘레 = ${rect1.perimeter()}`);

const rect2 = new Rectangle();
console.log(rect2);


// <연습문제>
// 원(Circle) 클래스를 선언:
// 필드: 반지름 radius. 기본값 0.
// 메서드: 넓이 area, 둘레 길이 perimeter

class Circle {
    constructor(radius = 0) {
        this.radius = radius;
    }
    area() {
        return 3.14 * (this.radius * this.radius);
    }
    perimeter () {
        return 2 * 3.14 * this.radius;
    }
}
const circ = new Circle(5);
console.log(circ);
console.log(`넓이 = ${circ.area()}`);
console.log(`둘레 = ${circ.perimeter()}`);

// 기본값으로 아규먼트 설정 없이 출력했을 시
class Circle2 {
    constructor(radius = 0) {
        this.radius = radius;
    }
    area() {
        return 3.14 * (this.radius * this.radius);
    }
    perimeter () {
        return 2 * 3.14 * this.radius;
    }
}
const circ2 = new Circle2();
console.log(circ2);
console.log(circ2.area());
console.log(circ2.perimeter()); // 죄다 0으로 나옴