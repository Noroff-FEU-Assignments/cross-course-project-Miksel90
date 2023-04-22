<<<<<<< HEAD
=======

>>>>>>> 54e1aeb484cc31872617c0380c47cc534e2ce7e0
// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";
<<<<<<< HEAD

// Full URL
const fullProductURL = apiBase + woocomBase + productBase; 


// Fetching the products
async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
    return products.filter(product => !product.featured); // Filter out featured products
}

// Create product HTML
function createProductHTML(product) {
    const container = document.querySelector(".container-featured");
=======
const featuredQueryParam = "?featured=true"; // Add the featured query parameter

// Full URL for products and featured products
const fullProductURL = apiBase + woocomBase + productBase;
const fullFeaturedURL = apiBase + woocomBase + productBase + featuredQueryParam; // Full URL for featured products

// Fetching the featured products
async function getFeaturedProducts() {
    const response = await fetch(fullFeaturedURL); // Fetch from the featured products URL with query parameter
    const featuredProducts = await response.json();
    return featuredProducts;
}

// Create HTML for featured products
function createFeaturedProductHTML(product) {
    const container = document.querySelector(".container-index"); // Target the container-index class
>>>>>>> 54e1aeb484cc31872617c0380c47cc534e2ce7e0

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

<<<<<<< HEAD
// Create products HTML
function createProductsHTML(products) {
    const container = document.querySelector(".container-featured");
    container.innerHTML = ""; // Clear existing content

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

// Main function
async function main() {
    const products = await getProducts();
    createProductsHTML(products);
}

main();
=======
// Fetch featured products and create HTML
async function main() {
    const featuredProducts = await getFeaturedProducts();
    if (featuredProducts.length > 0) {
        // Check if featured products are available
        for (let i = 0; i < featuredProducts.length; i++) {
            const product = featuredProducts[i];
            createFeaturedProductHTML(product);
        }
    } else {
        console.log("No featured products found.");
    }
}

main();
>>>>>>> 54e1aeb484cc31872617c0380c47cc534e2ce7e0
