


// function counter() {
//     document.querySelector('#secondOnes').textContent = 0;
//     document.querySelector('#secondTens').textContent = 0;
//     let count = 1;
//     setInterval(function() {
        
//         if (count < 10) {
//             document.querySelector('#secondOnes').textContent = count;
//             document.querySelector('#secondTens').textContent = 0;
//             count += 1;
//         }
//         else if (count === 10){
//             document.querySelector('#secondTens').textContent = 1;
//             document.querySelector('#secondTens').style.color = 'red';
//             document.querySelector('#secondOnes').textContent = 0;
//             document.querySelector('#secondOnes').style.color = 'red';
//             count = 0;
//         }
//     }, 1000);
// }
const digits = document.querySelectorAll('.digit')
const  tenths = document.querySelector('#msHundreds')
const hundredths = document.querySelector('#msTens')
const seconds = document.querySelector('#secondOnes')
const tenSeconds = document.querySelector('#secondTens')

function counter() {
    hundredths.textContent = 0;
    tenths.textContent = 0;
    seconds.textContent = 0;
    tenSeconds.textContent = 0;
    let count = 1;
    setInterval(function() {
        
        if (count < 10) {
            seconds.textContent = count;
            tenSeconds.textContent = 0;
            digits.forEach(el => el.style.color = 'black');
            count += 1;
        }
        else if (count === 10){
            tenSeconds.textContent = 1;
            seconds.textContent = 0;
            digits.forEach(el => el.style.color = 'red');
            count = 0;
        }
    }, 1000);
}
function msCounter() {
    hundredths.textContent = 0;
    tenths.textContent = 0;
    let count = 1;
    setInterval(function() {
        
        if (count < 10) {
            hundredths.textContent = count;
            // tenths.textContent = 0;
            count += 1;
        }
        else if (count === 10){
            tenths.textContent++;
            hundredths.textContent = 0;
            
            count = 0;
        }
        if (tenths.textContent > 9) {
            tenths.textContent = 0;
        }
    }, 10);
}
counter();
msCounter();
