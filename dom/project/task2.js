let originalPrice = 1000;
let discountedPrice = originalPrice;

// call all id
const applyDiscountBtn = document.getElementById('btn-discount');
const discountedPriceElement = document.getElementById('discounted-price');
const purchaseBtn = document.getElementById('btn-purchase');

// operation on discount price
applyDiscountBtn.addEventListener('click', () => {
    discountedPrice = originalPrice * 0.7;
    discountedPriceElement.textContent = `Discounted Price: $${discountedPrice.toFixed()}`;
    purchaseBtn.removeAttribute('disabled');
});

// alert after payment
purchaseBtn.addEventListener('click', () => {
    alert(`Tumi bal kinecho $${discountedPrice.toFixed()} Thank you!`);
});
