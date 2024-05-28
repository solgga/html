/**
* event.html에 포함
*/



const btnInput = document.querySelector('button#btnInput');
btnInput.addEventListener('click', function (e) { 
    console.log(e); // > PointerEvent
    
    const itemInput = document.querySelector('input#itemInput');
//    const output = document.querySelector('div#output');
//    output.innerHTML = itemInput.value;
//    itemInput.value = '';
    
    const itemList = document.querySelector('ul#itemList');
    itemList.innerHTML += `<li>${itemInput.value}</li>`; //아이템리스트를 이너html에 포함시키고 리스트로된 밸류값을 하나씩 추가시킨다
    itemInput.value = '';  // >> 값을 비워버린다는 뜻
    
});


// (1)   
// TODO: input#itemInput2 요소에 'keydown' 이벤트 리스너를 등록:
// 엔터키가 눌렸을 때, input에 입력된 내용을 ul#itemList2의 리스트 아이템으로 추가.
const itemInput2 = document.querySelector('input#itemInput2');
const itemList2 = document.querySelector('ul#itemList2');
itemInput2.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'Enter') {
           
    }   
    itemList2.innerHTML += `<li>${itemInput2.value}</li>`;
});

// 오쌤풀이 (1)
// const itemInput2 = document.querySelector('input#itemInput2');
// itemInput2.addEventListener('keypress', function (e) {
//      //console.log(e); // >> 키를누르는순간 keyboardEvent를 확인하면 무슨 키를 눌렀는지 개발자화면에 뜸. 그래서 먼저해보고 파악하는게 중요.
//      if (e.key === 'Enter') {
//          const itemList2 = document.querySelector('ul#itemList2');
//          itemList2.innerHTML += `<li>${itemInput2.value}</li>`;
//          itemInput2.value = '';         
//      }
// });


// (2)
// TODO: input#username 요소에 'change' 이벤트 리스너를 등록:
// input에 입력된 내용이 바뀔 때마다 div를 입력 내용으로 덮어씀.
const username = document.querySelector('input#username');
username.addEventListener('change', function (e) {
    const output = document.querySelector('div#output');
    output.innerHTML = e.target.value;
    
});

// 오쌤풀이 (2)
// const username = document.querySelector('input#username');
// username.addEventListener('change', (e) => {
//      //console.log(e); //>> 텍스트필드에 아무내용을 쓰고 마우스로 바깥부분을 클릭하면 그때 change이벤트가 적용돼서 콘솔창에 결과가 뜸.   
//      //'change' 이벤트는 input의 내용이 변경되고, 텍스트창이 깜빡깜빡(포커스)이 아니고,
//      //input에 입력된 값이 그 이전과 달라진 경우에 발생함.
//      const output = document.querySelector('div#output');
//      output.innerHTML = username.value;
//      username.value = '';
// });




// (3)
// TODO: img#bulb 요소에 'mouseenter' 이벤트 리스너를 등록:
// img의 src를 'images/bulb_on.gif'로 변경.
const bulb = document.querySelector('img#bulb');
bulb.addEventListener('mouseenter', function (e) {
    bulb.src = 'images/bulb_on.gif';
});
// TODO: img#bulb 요소에 'mouseleave' 이벤트 리스너를 등록:
// img의 src를 'images/bulb_off.gif'로 변경.
bulb.addEventListener('mouseleave', function (e) {
    bulb.src = 'images/bulb_off.gif';
});


// 오쌤풀이 (3)
// const bulb = document.querySelector('img#bulb');
// bulb.addEventListener('mouseenter', function (e) { // >> function의 아규먼트인 e를 아래 코드에서 사용되지 않는다면 생략해도 된다. 있되없되.
//      bulb.src = 'images/bulb_on.gif';
//      bulb.alt = 'bulb_on';   
// });

// bulb.addEventListener('', (e) => {
//      bulb.src = 'images/bulb_off.gif';
//      bulb.alt = 'bulb_off';    
// });