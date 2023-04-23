// parameters in the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

// new URL for product details
const apiUrl = `http://rainydays.local/wp-json/wc/store/products/${productId}`;

// Fetch product details and new HTML
async function getProductDetails() {
  const response = await fetch(apiUrl);
  const product = await response.json();
  const container = document.getElementById("product-details-container");

  // HTML elements for product details
  const title = document.createElement("h2");
  title.innerText = product.name;
  container.append(title);

  const img = document.createElement("img");
  img.src = product.images[0].src; 
  img.alt = product.images[0].alt;
  container.append(img);

  const price = document.createElement("p");
  price.innerText = "Price: $" + (product.prices.price / 100).toFixed(2);
  container.append(price);
}

//running function 
getProductDetails();


