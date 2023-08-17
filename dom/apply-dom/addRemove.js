
// event delegation

// add new items from parent call
document.getElementById('add-btn').addEventListener('click', function () {
    let ulContainer = document.getElementById('ul-lists');
    
    let addLi = document.createElement('li');
    addLi.innerText = 'new add li';
    ulContainer.appendChild(addLi);
});

// delete items itself by click
document.getElementById('ul-lists').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})