// deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // call all id,and get all them as a "String"
    let depositInput = document.getElementById('deposit-input');
    let depositDisplay = document.getElementById('deposit-display');
    let totalAmount = document.getElementById('total-amount');
    // convert all "String" into "Number"
    let convertDepositInput = parseFloat(depositInput.value);
    let convertDepositDisplay = parseFloat(depositDisplay.innerText);
    let convertTotalAmount = parseFloat(totalAmount.innerText);

    // condition or validation
    if (convertDepositInput <= 0 || isNaN(convertDepositInput)) {
        alert('please input valid amount')
    } else {
        // operation the all logic
        depositDisplay.innerText = convertDepositDisplay + convertDepositInput;
        totalAmount.innerText = convertTotalAmount + convertDepositInput;
    }    
    depositInput.value = '';

});


// .....................................................

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // call all id,and get all them as a "String"
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawDisplay = document.getElementById('withdraw-display');
    let totalAmount = document.getElementById('total-amount');
    // convert all "String" into "Number"
    let convertTotalAmount = parseFloat(totalAmount.innerText);
    let convertWithDrawInput = parseFloat(withdrawInput.value);
    let convertWithdrawDisplay = parseFloat(withdrawDisplay.innerText);
    // condition or validation
    if ( convertWithDrawInput <= 0 || isNaN(convertWithDrawInput)) {
        alert('You can not withdraw negative amount')
    } else if (convertWithDrawInput > convertTotalAmount) {
        alert(' You do not have sufficient balance')
    } else {
        // operation the all logic
        withdrawDisplay.innerText = convertWithdrawDisplay + convertWithDrawInput;
        totalAmount.innerText = convertTotalAmount - convertWithDrawInput;
    }
    withdrawInput.value = '';

});