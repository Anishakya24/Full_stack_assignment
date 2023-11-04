// Event Handling for Mobile Menu Icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


//for toggling the navbar

menu.onclick=()=>{
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

// Event Handling for Window Scroll

window.onscroll = () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active') ;
}

// ScrollReveal Animations

const sr = ScrollReveal ({
    distance: '60px', 
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reveal('.services-container .box',{delay: 600, origin: 'top'})
sr.reveal('.about-container .box',{delay: 600, origin: 'top'})
sr.reveal('.reviews-container',{delay: 600, origin: 'top'})
