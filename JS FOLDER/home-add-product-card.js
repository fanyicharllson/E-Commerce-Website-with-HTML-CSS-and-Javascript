
document.addEventListener('DOMContentLoaded', function() {
   
    const addButtons = document.querySelectorAll('.add-product-button');
    const cartIcon = document.querySelector('.cart-icon');
   
    let productTotal = parseInt(localStorage.getItem('totalProduct')) || 0;

    let UserNumberOfProduct = document.querySelector('#nav-number-product').textContent = productTotal;


    cartIcon.addEventListener('dblclick', (e) => {

      e.preventDefault();
      
      localStorage.clear();

      Swal.fire({
        title: 'Cleared!',
        text: 'You empty your cart by double clicking.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      })
     

    })
   
    
  

     
    // Add click event listener to each button
    addButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        
       
        
        // Find the closest product-container (parent)
        const productContainer = this.closest('.product-container');
        
        // Find the added-container within the same product-container
        const addedContainer = productContainer.querySelector('.added-container');

        let selectedProduct = productContainer.querySelector('#productNumber')
        let selectedProductValue = selectedProduct.value;


        UserNumberOfProduct += Number(selectedProductValue);

        localStorage.setItem('totalProduct', UserNumberOfProduct);
       
       
        // Update the total number of products in the navigation bar
       document.querySelector('#nav-number-product').textContent = UserNumberOfProduct;
        
        addedContainer.style.opacity = 1;
        addedContainer.style.visibility = 'visible'; 
        
        setTimeout(() => {
            addedContainer.style.opacity = 0;
            addedContainer.style.visibility = 'hidden';  
        
        }, 3000)

        
        // Toggle visibility of the added-container
        // if (addedContainer.style.display === 'none' || addedContainer.style.display === '') {
        //   addedContainer.style.display = 'flex';
        // } else {
        //   addedContainer.style.display = 'none';
        // }


    
      });
    });
  });
  