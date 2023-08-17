document.getElementById('btnApplyDiscount').addEventListener('click', function () {
    let displayPrice = getTextElement('displayPrice');
    let discountAmount = displayPrice * 0.3;
    let newPrice = displayPrice - discountAmount;
    // 
    document.getElementById('displayPayAmount').innerText = newPrice;
    document.getElementById('displayPay').classList.remove('hidden');
})