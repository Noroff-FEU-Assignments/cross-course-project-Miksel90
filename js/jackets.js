// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

// Full URL
const fullProductURL = apiBase + woocomBase + productBase; 

//Fetching the products
async function getProducts() {
    const response = await fetch(fullProductURL); 
    
    const products = await response.json();

 return products;
/* console.log(products); */
}


//Create HTML 
function createProductHTML(product) {
    const container = document.querySelector(".container-featured");

   /*  const productContainer = document.createElement("div"); */
    const productContainer = document.createElement("a");
    productContainer.href = "jacket-specific.html?id=" + product.id
    productContainer.classList.add("product");
    productContainer.id = product.id;


    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);

    /*  console.log(product.images) */


    //Looping through the Jsoon 
    for (let i = 0; i <product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
        }

        const price = document.createElement("p"); 
        price.innerText = "Price: $" + (product.prices.price / 100).toFixed(2); 
        productContainer.append(price);

    container.append(productContainer)        
}

function createProductsHTML (products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product)   
    }
}

//create the main funcion
async function main() {
    const products = await getProducts()
    createProductsHTML(products)
   //  console.log(products[0]); 
} 

//run the entire function
main()