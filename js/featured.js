// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

// Full URL
const fullProductURL = apiBase + woocomBase + productBase;

// Fetching the products
async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
  /*   return products; */
  console.log(products)
}

// Create product HTML
function createProductHTML(product, container) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    const price = document.createElement("p");
    price.innerText = "Price: $" + (product.prices.price / 100).toFixed(2);
    productContainer.append(price);

    container.append(productContainer);
}

// Create products HTML
function createProductsHTML(products) {
    const featuredContainer = document.querySelector(".container-featured");
    featuredContainer.innerHTML = ""; // Clear existing content

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.featured) {
            createProductHTML(product, featuredContainer);
        }
    }
}

// Main function
async function main() {
    const products = await getProducts();
    createProductsHTML(products);
}

// Run the main function
main();
