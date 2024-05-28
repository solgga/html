/**
 * array_method.html 에서 사용할 것
 * 
 * JS array 객체의 함수(메서드) 들
 */

const arr = [1, 2, 3];
console.log(arr);

// 배열에 새로운 원소를 배열 끝에 추가:
arr.push(100); // push() : 원본 배열의 끝에 새로운 원소를 추가를 하고, 원본 배열이 바뀜.
console.log(arr);

let result = arr.concat(200); // concat() : 원본 배열을 변경하지 않고, 원소가 추가된 새배열을 리턴하는 메서드
console.log(arr);
console.log(result);

// 배열의 마지막 원소를 삭제하는 메서드
arr.pop(); // pop() : 원본 배열의 마지막 원소를 삭제. 아규먼트가 따로 없음. 원본 배열이 바뀜.
console.log(arr);

result = arr.slice(0, -1); // slice(start, end) : 배열에서 start 인덱스부터 end 인덱스까지를 잘라낸 새로운 배열을 리턴하는 메서드.
// -1 은 배열 마지막 끝이라 생각하면됨 -2는 끝에서 두번째 배열. >> 원본 배열이 변경되지않음.
console.log(arr);
console.log(result);

const arr2 = [10, 100, -1, 90];
console.log(arr2);

// toSorted() : 
// 배열의 원소들을 문자열로 변환해서 크기 비교를 함.
// 오름차순 정렬된 "새로운" 배열을 리턴함.
// 원본 배열은 변경되지 않음.
// toSorted(callback) : 배열 원소들의 크기 비교를 할 때 사용할 콜백을 아규먼트로 전달할 수 있음.
result = arr2.toSorted((x, y) => x - y); // 원본 배열을 오름차순으로 정렬한 "새로운" 배열을 리턴.
console.log(arr2); // toSorted() 메서드는 원본 배열을 변경하지 않음.
console.log(result);

// sort() :
// 배열의 원소들을 문자열로 변환해서 크기 비교.
// 원본 배열의 원소 순서를 오름차순으로 변경. 원본 배열이 바뀐단 뜻.
// sort(callback) : 배열 원소의 크기 비교에서 사용하는 콜백을 아규먼트로 전달.
arr2.sort((x, y) => x - y);



// forEach, filter, map, reduce :
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
// 배열 numbers 의 원소들 중에서 홀수들로만 이루어진 새로운 배열을 만드세요.


//push를 사용하는 경우
const odds = [];
for (let x of numbers) {
    if(x % 2) {
        odds.push(x);
    }    
}
console.log(odds);

// (1)위 코드를 간단하게 필터(filter)를 사용하면
result = numbers.filter(function (x) {
   return x % 2; 
});
// 위 코드를 한번 더 간단하게 람다식처럼 바꾸면
result = numbers.filter((x) => x % 2);
console.log(result);


//concat을 사용하는 경우
let odds2 = [];
for (let x of numbers) {
    if (x % 2) {
        odds2 = odds2.concat(x);
    }
}
console.log(odds2);



// (2)map 을 써보자
// 배열 numbers의 원소들의 제곱을 원소로 갖는 새로운 배열을 만드세요.
const squares = [];
for (let x of numbers) {
    squares.push(x * x);
}
console.log(squares);


result= numbers.map((x) => x * x);
console.log(result);

// (3)반복문을 간단하게 쓰는 메서드 forEach(). 화살표함수(callback함수) 를 이용함.
// numbers.forEach((x) => console.log(x));   나중에 확인할 때 주석풀고 확인 ㄱㄱ




console.log(numbers);

// (4)reduce 를 사용하는 방법을 알아보자.

// 일단 배열 numbers의 모든 원소들의 합계를 계산하고 싶다.
let sum = 0;
for (let value of numbers) {
    sum += value; // sum = sum + value; 왼쪽(sum+=value;)은 이 코드를 간단하게 한 것.
}
console.log(`sum = ${sum}`);

sum = numbers.reduce((acc, cur) => acc + cur, 0);
// reduce(callback, initialValue)
console.log(`sum = ${sum}`);

// 이번엔 numbers 의 모든 원소들의 곱을 구해보자:
mul = numbers.reduce((acc, cur) => acc * cur, 1);
console.log(`mul = ${mul}`);

// reduce를 안쓰는 경우엔 이렇게
result=1;
for(let value of numbers){
    result=result*value; // 왼쪽 식을 간단하게 하면 이렇게댐 result *= value;
}
console.log(`result = ${result}`);



console.log(numbers);
// 연습문제 3가지 ㄱㄱㄱ
// 1.numbers 의 원소들 중에서 짝수들의 합은?: 2 + 4 + 6
result = numbers.filter((x) => x % 2 === 0)
        .reduce((acc, cur) => acc + cur);
console.log(`짝수의 합 = ${result}`);

// 2.numbers 의 원소들의 제곱의 합?: 1 + 4 + 9 + 16 + 25 + 36
result = numbers.map((x) => x * x)
        .reduce((acc, cur) => acc + cur);
console.log(`제곱의 합 = ${result}`);

// 3.numbers 의 원소들 중에서 짝수들의 제곱의 합은?: 4 + 16 + 36
result = numbers.filter((x) => x % 2 === 0).map((x) => x * x).reduce((acc, cur) => acc + cur);
console.log(`짝수들의 제곱의 합 = ${result}`);


// 2번문제의 코드를 한 줄 한 줄 풀어써보면 이렇다.
console.log(numbers);
result = numbers.map((x) => x * x);
console.log(result);
result = result.reduce((acc, cur) => acc + cur);
console.log(result);


// 3번문제의 답을 한 줄씩 해보면
console.log(numbers);
result = numbers.filter((x) => x % 2 === 0);
console.log(result);
result = result.map((x) => x * x);
console.log(result);
result = result.reduce((acc, cur) => acc + cur);
console.log(result);