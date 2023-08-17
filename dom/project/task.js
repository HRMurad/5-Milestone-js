// make a number double
document.getElementById('dbl').addEventListener('click', function () {
    let input = document.getElementById('input-value').value;

    if (!isNaN(parseFloat(input))) {
        let double = parseFloat(input) * 2;
        let createTag = document.createElement('p');
        createTag.innerText = double;
        document.body.appendChild(createTag);
    } else {
        alert('Please input a valid number value');
    }
});


//make a number tripple

document.getElementById('tpl').addEventListener('click', function () {
    let input = document.getElementById('input-value').value;
      if (!isNaN(parseFloat(input))) {
        let tripple = parseFloat(input) * 3;
        let createTag = document.createElement('p');
        createTag.innerText = tripple;
        document.body.appendChild(createTag);
    } else {
        alert('Please input a valid number value');
    }
});