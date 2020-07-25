

// Open nav bar when hamburger menu is clicked
document.getElementById('hambruger-menu').addEventListener('click', (e) => {
e.stopPropagation();
document.getElementById('nav-boxy').classList.toggle('show');
});
  
// close hamburger menu if body is clicked ONLY when the menu is already visible
document.body.addEventListener('click', () => {
const navBoxEl = document.getElementById("nav-boxy")
if(navBoxEl.className === 'nav-boxy-class show') {
navBoxEl.classList.toggle('show');
}
});

const vinkel = document.getElementById('vinkel');
const content = document.querySelector('.content', '#rullegardin-id');
const rullegardin = document.getElementById('rullegardin-id');
const cfv = document.querySelector('.cfv');



cfv.addEventListener('click', () => {
vinkel.classList.toggle('rotate'),
rullegardin.classList.toggle('rullegardin-show');
});



