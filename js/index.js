// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

// Full URL
const fullProductURL = apiBase + woocomBase + productBase; 

//Fetching the products
async function fetchProducts() {
    const response = await fetch(fullProductURL); 
    
    const products = await response.json();

    return products
}

function createProductHTML(product) {
    const container =document.querySelector(".container");

    const productContainer =document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;
}

function createProductsHTML (products) {
    for (let i = 0; i<products.length; i++) {
        const products = products[i];
        createProductHTML(product)   
    }
}

async function main() {
    const products = await fetchProducts()
}