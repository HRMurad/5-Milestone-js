function getInputValue(inputId) {
    let inputValue = document.getElementById(inputId);
    let convertedInputValue = parseFloat(inputValue.value);
    inputValue.value = '';
    return convertedInputValue;
}

function getTextValue(textId) {
    let textElementValue = document.getElementById(textId);
    let convertedTextElementValue = parseFloat(textElementValue.innerText);
    return convertedTextElementValue;
}

function setTextElementValue(textId, newTextValue) {
    let element = document.getElementById(textId);
    element.innerText = newTextValue;
}
