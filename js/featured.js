// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

// Full URL with query parameter
const fullProductURL = apiBase + woocomBase + productBase + "?featured=true";

// Fetching the products
async function getProducts() {
  const response = await fetch(fullProductURL);

  const products = await response.json();

  return products;
}

// Create HTML
function createProductHTML(product) {
  const container = document.querySelector(".container-featured");

const productContainer = document.createElement("a");
    productContainer.href = "jacket-specific.html?id=" + product.id
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

    // Create anchor tag button
    const cartButton = document.createElement("a");
    cartButton.href = "cart.html";
    cartButton.classList.add("cart-button");
    cartButton.innerText = "Add to Cart"; 
    productContainer.append(cartButton);

  const price = document.createElement("p");
  price.innerText = "Price: $" + (product.prices.price / 100).toFixed(2);
  productContainer.append(price);


  container.append(productContainer);
}

function createProductsHTML(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    createProductHTML(product);
  }
}

// Create the main function
async function main() {
  const products = await getProducts();
  createProductsHTML(products);
}

// Run the entire function
main();
