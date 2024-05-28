/**
 * switch.html 에 포함.
 */

console.log('test');

const weekday = document.getElementById('weekday');
const button = document.getElementById('btn');
const result = document.getElementById('result');

function selectListener() {
    const value = weekday.value;
    switch (value) {
        case 'mon':
        case 'tue':
        case 'wed':
        case 'thu':
        case 'fri':
            result.innerHTML = '학원 출석';
            break;
        case 'sat':
        case 'sun':
            result.innerHTML = '놀러감';
            break;
        default:
            result.innerHTML = '몰랑~';
    }
}

// 버튼에 이벤트리스너를 추가하겠다 클릭이라는 이벤트가 발생하면. 셀렉트리스너()를 작동시키겠다.
btn.addEventListener('click', selectListener); 