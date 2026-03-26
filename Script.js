var typed = new Typed(".text",{
strings:["Software Engineer","Java Developer","Full Stack Developer"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    };
});