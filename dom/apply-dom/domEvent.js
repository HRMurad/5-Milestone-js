// first one
function clickMe() {
    document.body.style.backgroundColor = 'red';
}

// second one
let addColor = document.getElementById('button');
addColor.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// third one
let addGreen = document.getElementById('buttonTwo');
addGreen.addEventListener('click', makeGreen);

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// final one
document.getElementById('buttonThree').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})