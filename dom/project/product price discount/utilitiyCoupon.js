function getTextElement(textName) {
    let element = document.getElementById(textName);
    let convertElement = parseFloat(element.innerText);
    return convertElement;
}