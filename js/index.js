const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductURL = apiBase + woocomBase + productBase; 

async function fetchProducts() {
 
    const response = await fetch(fullProductURL); 
    const products = await response.json();

    return products
    };