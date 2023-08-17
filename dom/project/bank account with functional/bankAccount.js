document.getElementById('btnDeposit').addEventListener('click', function () {
    let depositInputValue = getInputValue('depositInput');
    let newGetTextValue = getTextValue('depositDisplay');
    // condition
    if (depositInputValue <= 0 || isNaN(depositInputValue)) {
        alert('please enter a valid amount')
        return;
    }
    // 
    let updatedValue = newGetTextValue + depositInputValue;
    setTextElementValue('depositDisplay', updatedValue);
    //

    let totalAmount = getTextValue('totalAmount');
    let updatedTotalAmount = totalAmount + depositInputValue;
    setTextElementValue('totalAmount', updatedTotalAmount);
});
// 
document.getElementById('btnWithdraw').addEventListener('click', function () {
    let withDrawInputValue = getInputValue('withdrawInput');
    let withdrawDisplayValue = getTextValue('withdrawDisplay');
    let totalAmount = getTextValue('totalAmount');
    
    // condition
    if (withDrawInputValue <= 0 || isNaN(withDrawInputValue)) {
        alert('Please enter valid amount');
        return;
    } else if (withDrawInputValue > totalAmount) {
        alert('You do not have sufficient balance');
        return;
    }
    // 
    let updatedWithdrawDisplayValue = withdrawDisplayValue + withDrawInputValue;
    setTextElementValue('withdrawDisplay', updatedWithdrawDisplayValue);
    // 
    
    let updatedTotalAmount = totalAmount - withDrawInputValue;
    setTextElementValue('totalAmount', updatedTotalAmount);
})