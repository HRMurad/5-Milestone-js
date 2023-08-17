// add comment inside default tag
document.getElementById('click-button').addEventListener('click', function () {
    let inputField = document.getElementById('input-field');
    let textField = inputField.value;

    let display = document.getElementById('text-field');
    display.innerText = textField;
    inputField.value = '';
});

// same thing,add  comment inside creating new tag
document.getElementById('click-button2').addEventListener('click', function () {
    let inputFieldNew = document.getElementById('input-field2');
    let textFieldNew = inputFieldNew.value;

    let displayNew = document.getElementById('text-field2');
    let pTag = document.createElement('p');
    pTag.innerText = textFieldNew;
    displayNew.appendChild(pTag);
    inputFieldNew.value = '';
});