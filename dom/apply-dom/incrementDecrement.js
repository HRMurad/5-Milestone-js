// target all item
let display = document.getElementById('init-value');
let incrementButton = document.getElementById('incr-btn');
let decrementButton = document.getElementById('decre-btn');

// initial value add
let initialValue = 0;

// for increment
incrementButton.addEventListener('click', function () {
    initialValue += 1;
    display.innerText = initialValue;
});

// for decrement
decrementButton.addEventListener('click', function () {
    if (initialValue === 0) {
        return alert('You can not add negative value')
    }
    initialValue -= 1;
    display.innerText = initialValue;
})