let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
};

window.addEventListener('scroll', function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
