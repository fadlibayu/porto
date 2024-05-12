const navbar = document.querySelector('.navbar');
document.querySelector('#hamburger-menu').onclick = () => {
    navbar.classList.toggle('active');
};

const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');    
    }
});