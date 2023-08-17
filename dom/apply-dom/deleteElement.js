// document.getElementById('click-button3').addEventListener('click', function () {
//     let deleteText = document.getElementById('text-field3');
//     deleteText.style.display = 'none';

//     let inputField = document.getElementById('input-field3');
//     inputField.value = '';
// });

// document.getElementById('input-field3').addEventListener('input', function (event) {
//     let text = event.target.value;
//     let deleteButton = document.getElementById('click-button3');
    
//     if (text === 'delete') {
//         deleteButton.removeAttribute('disabled');
//     } else {
//         deleteButton.setAttribute('disabled', true);
//     }
// });



const clickButton3 = document.getElementById('click-button3');
const inputField3 = document.getElementById('input-field3');
const deleteText = document.getElementById('text-field3');

clickButton3.addEventListener('click', function () {
    deleteText.style.display = 'none';
    inputField3.value = '';
});

inputField3.addEventListener('input', function () {
    if (inputField3.value !== 'delete') {
        clickButton3.disabled = true;
    } else {
        clickButton3.disabled = false;
    }
});
