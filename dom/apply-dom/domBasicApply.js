let getId = document.getElementById('id-title');
// console.log(getId);
// ans: This is ID tag
getId.innerText = 'changed id tag';
// ans: changed id tag

let checkingQuerySelectorAll = document.querySelectorAll('.ul-class');
for (let li of checkingQuerySelectorAll) {
// console.log(li);
// console.log(li.innerText);
    
}
checkingQuerySelectorAll.item;

// specific akta pete
let checkingQuerySelector = document.querySelector('#ul-id li');
// console.log(checkingQuerySelector);
checkingQuerySelector.innerText;

// style change
let addStyle = document.getElementById('id-title');
getId.style.backgroundColor = 'red';

// add or remove something
let addClass = document.getElementById('id-p');
addClass.getAttribute('class');
addClass.classList.add('new-adding')
addClass.classList.remove('remove-one')
console.log(addClass);

// set innerText
let addText = document.getElementById('add-text');
addText.innerText = 'hi this is new text';

// change innerhtml
// let changeHtml = document.getElementsByClassName('head-sec');
// console.log(changeHtml);

let changeHtml = document.getElementsByClassName('head-sec')[0].innerHTML = '<h4>hi i am h4 tag</h4>';
console.log(changeHtml);

// creare element
let documents = document.createElement('p');
documents.innerText='hi this is p tag'
console.log(documents);