
// Function to perform the search and highlight matching products
function searchAndHighlight() {
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-container');
    
    let foundProducts = [];

    if (searchTerm === '') {
        Swal.fire({
            title: 'Input Needed',
            text: 'Please enter a product name!',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Clear previous highlights
    products.forEach(product => product.classList.remove('product-highlight'));

    // Search for products and highlight matching ones
    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        
        if (productName.includes(searchTerm)) {
            foundProducts.push(product);
        }
    });

    if (foundProducts.length > 0) {
        foundProducts.forEach(product => {
            product.classList.add('product-highlight');
            document.querySelector('.main-grid').prepend(product);

            // Scroll to the product
            product.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(() => {
                product.classList.remove('product-highlight');
            }, 1000);
        });

    } else {
        Swal.fire({
            title: 'No Results',
            text: 'No products found!',
            icon: 'info',
            confirmButtonText: 'OK'
        });

        
    }
}






// Event listener for the search button click
document.querySelector('.search-btn').addEventListener('click', searchAndHighlight);

// Event listener for pressing the Enter key in the search bar
document.querySelector('.search-bar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchAndHighlight();
    }
});

// Event listener to remove highlight when clicking outside
document.addEventListener('click', function (e) {
    // Check if the click is outside of the search bar or search button
    if (!e.target.closest('.search-bar') && !e.target.closest('.search-btn')) {
        const products = document.querySelectorAll('.product-container');
        products.forEach(product => product.classList.remove('product-highlight'));
    }
});

