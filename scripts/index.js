const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.nav_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
})

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0){
        return navbar.classList.add('active')
    } else {
        return navbar.classList.remove('active')
    }
})
