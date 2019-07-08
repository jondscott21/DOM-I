


function counter() {
    let count = 1;
    setInterval(function() {
        
        if (count < 10) {
            document.querySelector('#secondOnes').textContent = count;
            document.querySelector('#secondTens').textContent = 0;
            count += 1;
        }
        else if (count === 10){
            document.querySelector('#secondTens').textContent = 1;
            document.querySelector('#secondOnes').textContent = 0;
            count = 0;
        }
    }, 1000);
}
console.log(counter());
counter();
console.log(document.querySelector('#secondOnes').value)
