/**
 * element.html에 포함
 */

// button#btn1 인 요소를 찾음:
const btn1 = document.querySelector('button#btn1')

// btn1 요소에 클릭 이벤트 리스너를 설정:
btn1.addEventListener('click', function() {
    // document.getElementById(id) 사용. id가 "id1"인 요소를 찾음.
    // > 같은 아이디를 갖는 요소가 여러개 있으면 가장 먼저 찾은 요소를 리턴.
    
    const div1 = document.getElementById('id1');
    //console.log(div1);
    
    // div1 요소의 바탕색을 변경:
    div1.style.backgroundColor = 'lime';

});

// buttom#btn2 인 요소를 찾음. document.getElementById('btn2')
const btn2 = document.querySelector('button#btn2');

// btn2 에 클릭 이벤트 리스너를 설정.
btn2.addEventListener('click', function() {
    // 이벤트 리스너는 class 속성 값이 "c1" 인 요소들의 바탕색을 변경.
    const divs = document.getElementsByClassName('c1'); // >> HTMLCollection을 리턴함 얘는 배열과 비슷함. 그래서 반복문 사용 가능
    // console.log(divs);
   
   for (let e of divs) {
    e.style.backgroundColor = 'slateblue';
   }
   
});

// button#btn3인 요소를 찾음:
const btn3 = document.querySelector('button#btn3');

// btn3 클릭 이벤트 리스너를 설정:
btn3.addEventListener('click', function() {
    // 태그 이름이 div 인 모든 요소들을 찾아서 바탕색을 변경
    const divs = document.getElementsByTagName('div');
    // console.log(divs);
    for (const e of divs) {
        e.style.backgroundColor = 'olive';
    }
});

// document.querySelector(), document.querySelectorAll():
// CSS 선택자 문법으로 작성되는 모든것들을 아규먼트를 전달.
// tagname, #id, .classname, tagname#id.classname
// parent > child
// ancestor descendent
// element:pseudo-selector 

const btn4 = document.querySelector('button#btn4');
btn4.addEventListener('click', function() {
    const div4 = document.querySelector('#id4'); // querySelector('div#id4');
    // console.log(div4);
    div4.style.backgroundColor = 'gray';
});


const btn5 = document.querySelector('button#btn5');
btn5.addEventListener('click', () => {   // 화살표함수로 익명함수를 간단하게 쓸 수 있다
    const divs = document.querySelectorAll('div.c2'); //>> 리턴타입이 NodeList를 리턴하는데 이건 배열과 비슷하다고 보면됨.
    console.log(divs);
    
//    for (let e of divs) {
//        e.style.backgroundColor = 'dodgerblue';
//    }
    
    divs.forEach((x) => x.style.backgroundColor='violet'); // querySelectorAll 인 경우에는 for-each 메서드를 사용할수 있음

}); 







