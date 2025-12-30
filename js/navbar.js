const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('nav').appendChild(hamburger);

const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
