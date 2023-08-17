// where to add
let ul = document.getElementById('ul-id');

// what to add
let li = document.createElement('li');
li.innerText = 'new li add';

// add the child
ul.appendChild(li);