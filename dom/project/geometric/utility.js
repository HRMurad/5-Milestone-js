// common function for value
function getInputValueById(id) {
    let inputValue = document.getElementById(id).value;
    let convertInputValue = parseFloat(inputValue);
    return convertInputValue;
}
//  common function for setValue
function setElementById(id, text) {
    let element = document.getElementById(id);
    element.innerText = text;
}

// add new calculator area function where element goes in

function addNewCalculatorArea(areaType, area) {
    let newCalculatorArea = document.getElementById('newCalculatorArea');
    // count number
    let count = newCalculatorArea.childElementCount;
    // create new html
    let p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn small">Convert</button>`;
    // add append child
    newCalculatorArea.appendChild(p)
}