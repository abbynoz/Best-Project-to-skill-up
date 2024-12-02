// Change main product image based on thumbnail click
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// Increase quantity
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Decrease quantity
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}
