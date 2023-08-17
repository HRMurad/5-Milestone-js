document.getElementById('btnApply').addEventListener('click', function () {
    let displayPrice = getTextElement('displayPrice');
    let input = document.getElementById('inputId');

    if (input.value === 'murad') {
    
        let discountAmount = displayPrice * 0.3;
        console.log(discountAmount);
        let newPrice = displayPrice - discountAmount;
        // 
        document.getElementById('displayPay').innerText = newPrice;
        document.getElementById('displayPay').classList.remove('hidden');
    } else (
        alert('please enter right coupon code')
    )
    });