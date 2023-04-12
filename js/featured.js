const endpointUrl = "https://rainydays.local/wp-json/wc/store/products";

const productGrid = document.getElementById('productGrid');
const featuredContainer = document.getElementById('featuredProducts');
const productDetailContainer = document.getElementById('productDetail');

async function fetchProducts() {
    try {
        const response = await fetch(endpointUrl); 
        const products = await response.json();

        // Showing only 4 products
        const lastFourProducts = products.slice(-4);
        
        // Rendering last 4 product data as thumbnails in a grid
        lastFourProducts.forEach(product => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            // Render products in thumbnail
            thumbnail.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><img src="${product.images[0].src}" alt="${product.name}">`;
            productGrid.appendChild(thumbnail);
            
            // Filtering and rendering featured products in their own section
            if (product.featured) {
                const featuredThumbnail = document.createElement('div');
                featuredThumbnail.classList.add('thumbnail');
                // Render featured product name and price in thumbnail
                featuredThumbnail.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><img src="${product.images[0].src}" alt="${product.name}">`;
                featuredContainer.appendChild(featuredThumbnail);
            }
            
            // Adding click event listener to each product thumbnail to show product detail page
            thumbnail.addEventListener('click', () => {
                renderProductDetail(product);
            });
        });
    } catch (error) {
        console.log(error);
    }
}

// Function to render product detail page
function renderProductDetail(product) {
    // Clear existing product detail
    productDetailContainer.innerHTML = '';
  
    // Render product detail
    const detail = document.createElement('div');
    detail.classList.add('product-detail');
    detail.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><img src="${product.images[0].src}" alt="${product.name}">`;
    productDetailContainer.appendChild(detail);
}

fetchProducts();