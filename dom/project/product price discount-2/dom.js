let total = 0;
let elementCount = [];
function buyButtonHandler(getThis) {
    let productName = getThis.parentNode.parentNode.childNodes[1].innerText;
    
    
    // 
    if (!elementCount[productName]) {
        elementCount[productName] = 1;
        let p = document.createElement('p');
        p.id = productName.replace(/\s/g);
        p.innerText = `${productName} ${elementCount[productName]}`;
        document.getElementById('outPutCalculation').appendChild(p);
        
    } else {
        elementCount[productName]++;
        let badgeElement = document.getElementById(productName.replace(/\s/g));
        badgeElement.innerText = `${productName} ${elementCount[productName]}`;
        console.log(badgeElement);
    }

   
    //total price
    let productPrice = getThis.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    total = total + parseFloat(productPrice);
    document.getElementById('totalPrice').innerText = total;
    // 10%discount
    let discountAmount = total * .1;
    document.getElementById('discount').innerText = discountAmount;
    // grand total
    let grandTotal = total - discountAmount;
    document.getElementById('grandTotal').innerText = grandTotal;


}