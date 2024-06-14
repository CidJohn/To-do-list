
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');

let total = 0;

function ItemData() {
    let itemList = [
        { name: "Item 1", price: 5.99 , img: "item_1.jpg", rate: 5},
        { name: "Item 2", price: 7.99 , img: "item_1.jpg", rate: 4},
        { name: "Item 3", price: 4.99 , img: "item_1.jpg", rate: 3},
        { name: "Item 4", price: 4.99 , img: "item_1.jpg", rate: 2},
        { name: "Item 5", price: 4.99 , img: "item_1.jpg", rate: 1},
        { name: "Item 6", price: 4.99 , img: "item_1.jpg", rate: 2},
        { name: "Item 7", price: 4.99 , img: "item_1.jpg", rate: 4},
        { name: "Item 8", price: 4.99 , img: "item_1.jpg", rate: 3},
        { name: "Item 9", price: 4.99 , img: "item_1.jpg", rate: 1},
        { name: "Item 10", price: 4.99 , img: "item_1.jpg", rate: 2}

    ];

    let html = "";

   itemList.forEach((item, index) => {
    // Create a star rating HTML based on the 'rating' property of the item
    const starRatingHtml = getStarRatingHtml(item.rate);

    html += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card">
            <img src="assets/${item.img}" class="card-img-top h-75" alt="..."> 
            <div class="card-body">
                <div class="menu-item">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                    <div class="star-rating h2" >${starRatingHtml}</div>
                    <span hidden>${item.name}</span>
                    <button class="add-to-cart btn btn-primary" data-price="${item.price}">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
});

// Function to generate star rating HTML based on the rating value
function getStarRatingHtml(rating) {
    const maxStars = 5; // Set the maximum number of stars to 5
    const starPercentage = (rating / maxStars) * 100; // Calculate the percentage of stars filled

    let starHtml = '';

    for (let i = 0; i < maxStars; i++) {
        if (i < rating) {
            starHtml += `<span class="star" >&#9733;</span>`; // Unicode character for a filled star
        } else {
            starHtml += `<span class="star" >&#9734;</span>`; // Unicode character for an outline star
        }
    }

    return `${starHtml} ${starPercentage}`;
}



document.querySelector(".menu").innerHTML = `
<div class="row">
    ${html}
</div>`
;
    

    // Register event listeners for add-to-cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        total += price;
        totalElement.textContent = total.toFixed(2);

        const itemName = button.previousElementSibling.textContent;
        const li = document.createElement('li');
        li.textContent = `${itemName} - $${price.toFixed(2)}`;

        // Add remove item button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-item'); // Add a class for styling and event handling
        removeButton.addEventListener('click', () => {
            // Subtract the price from the total
            total -= price;
            totalElement.textContent = total.toFixed(2);

            // Remove the item from the cart list
            cart.removeChild(li);
        });

        // Append the remove item button to the list item
        li.appendChild(removeButton);

        // Append the list item to the cart
        cart.appendChild(li);
    });
});

}

document.addEventListener("DOMContentLoaded", ItemData);

checkoutButton.addEventListener('click', () => {
    alert(`Total amount: $${total.toFixed(2)}`);
    total = 0;
    totalElement.textContent = '0.00';
    
    cart.innerHTML = '';
});
