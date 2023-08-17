     document.getElementById('btn').addEventListener('click', function () {
            let inputBox = document.getElementById('input');
            let inputText = document.createElement('p');
            inputText.innerText = inputBox.value;
            
            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                inputText.remove();
                deleteButton.remove();
            });
            
            let outputContainer = document.getElementById('outputContainer');
            outputContainer.appendChild(inputText);
            outputContainer.appendChild(deleteButton);
            
            inputBox.value = '';
        });