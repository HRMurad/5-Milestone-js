// event for one button
document.getElementById('oneBtn').addEventListener('click', function () {
    setTextNameById('output','its a number one button')
})

// event for two button
document.getElementById('two').addEventListener('click', function () {
    setTextNameById('output','its a number two button')
})

// first option..........................
function three() {
    setTextNameById('output','its a number three button')
}

// common function for all function
function setTextNameById(id, text) {
    document.getElementById(id).innerText = text;
}


//  2nd option..........................
function btnInput() {
    let oldInput = document.getElementById('inputId').value;
    setInputValueById('outputId',oldInput)

}
// common function
function setInputValueById(id, value) {
    document.getElementById(id).innerText = value;
}


// use of "THIS"
function inputHandler(getThis) {
    let emptyElement = document.getElementById('spanId');

    // target any id into parent id by using THIS

    // let targetSpecificElement = getThis.parentNode.childNodes[1].innerText;
    // console.log(targetSpecificElement);
    // ans: Hi I am p tag. Let me in Span tag

    //let targetSpecificElement = getThis.parentNode.childNodes[2].innerText.split(' '[4]);
    // ans: is


    
    // push in old id
    // let targetElementText = getThis.parentNode.querySelector('p').innerText;
    // emptyElement.innerText = targetElementText;

    

    // push in new id
    let itemName = getThis.parentNode.childNodes[1].innerText;
    let createLi = document.createElement('li');
    createLi.innerText = itemName;
    emptyElement.appendChild(createLi);


}
