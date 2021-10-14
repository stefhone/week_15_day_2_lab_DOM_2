document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);

  // 1
  // Iterate over the products in data and output the name of each product to the console.
  // Write a for loop that iterates over the products in data.
  // Use console.log to output the name of each product.
  // loop through product objects in data.js file
  // for every object perform the following console.log
  for(const product of data.products) {
    console.log('Name of each product:', product.name);

    const products = document.querySelector('#products');
    const ulProductElement = document.createElement('ul');
    ulProductElement.classList.add('product');
    products.appendChild(ulProductElement);

    const productName = document.createElement('li');
    productName.textContent = product.name; 
    ulProductElement.appendChild(productName);
  }



  // 2 
  // Use querySelector to target the section on the page with the id products and store it in a variable. 
  // This is the element that we will append the product list to.
  // const products = document.querySelector('#products');

  // 3 
  // Use createElement to create a ul element and store it in a variable, then append it to the products section that you targetted previously. 
  // We will do this for each product in the array, but let's get it working with the first one to start with.
  // const ulProductElement = document.createElement('ul');
  // ulProductElement.classList.add('product');
  // products.appendChild(ulProductElement);

  // 4 
  // Use createElement to create an li element and store it in a variable, then append it to the ul that you created previously using appendChild. 
  // The li should display the name of the first product from data.products.
  // const productName = document.createElement('li');
  // productName.textContent = data.products[0].name; 
  // ulProductElement.appendChild(productName);

});
