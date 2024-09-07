document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('open');
});

//nav product sweataleart
document.getElementById("nav-product").addEventListener('click', function(){
    Swal.fire({
        title: 'Information',
        text: 'You are currently on our product page.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
})

//return 
