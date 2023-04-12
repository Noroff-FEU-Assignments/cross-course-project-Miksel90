// Set the URL of your WordPress site
const apiUrl = "http://rainydays.local/wp-json/wc/store/products";

// Set the endpoint for the product data
const endpoint = 'products';

// Fetch the product data from the API
fetch(apiUrl + endpoint)
  .then(response => response.json())
  .then(data => {
    // Process the data as needed
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });