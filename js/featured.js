
// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";
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
