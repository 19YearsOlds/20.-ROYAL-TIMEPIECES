const productList = document.getElementById("product-list");

for (let i = 1; i <= 30; i++) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-card");
    productDiv.innerHTML = `
        <img src="../public/images/watch${i}.jpg" alt="Luxury Watch ${i}">
        <h3>Luxury Watch ${i}</h3>
        <p>Price: $${300 + i * 10}</p>
        <button>Add to Cart</button>
    `;
    productList.appendChild(productDiv);
}