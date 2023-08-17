// by getting all html documents
console.log(document);

// by just getting all body from html
console.log(document.body);

// by getting tag name from html
console.log(document.getElementsByTagName('ul'));

// by getting class name from html
console.log(document.getElementsByClassName('head-title'))

// be getting full h1 tag
let getH1Tag = document.getElementsByTagName('h1');
for (let item of getH1Tag) {
    console.log(item);
    console.log(item.innerText);
}

// by getting tag into array
let liCollection = document.getElementsByTagName('li');
for (let item of liCollection) {
    console.log(liCollection);
    console.log(item.innerText);
}