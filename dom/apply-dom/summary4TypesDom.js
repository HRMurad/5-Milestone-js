// first one
let getId = document.getElementById('h1-tag');
console.log(getId);

// second one
let getClass = document.getElementsByClassName('li-tag');
console.log(getClass);

// checking by for of loop
let getAllClass = document.getElementsByClassName('li-tag');
for (let item of getAllClass) {
    console.log(item);
}

// third one
let getAllTagName = document.getElementsByTagName('li');
console.log(getAllTagName);

// call by nested

let grandParent = document.getElementsByClassName('parent');
console.log(grandParent[0]);
let childrenOne = document.getElementsByClassName('ul-tag');
console.log(childrenOne[0]);

// create tag with text

let newTag = document.createElement('h1');
console.log(newTag);
newTag.innerText = 'it is new tag';

// add new tag into list

// by class name

// let ulElements = document.getElementsByClassName('ul-tag');

// for (let ul of ulElements) {
//     let addLi = document.createElement('li');
//     addLi.innerText = 'hi';
//     ul.appendChild(addLi);
// }


// by id name
let ul = document.getElementById('ul-id');
let addLi = document.createElement('li');
addLi.innerText = 'hi';
ul.appendChild(addLi)