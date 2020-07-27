//const vinkel = document.getElementById('vinkel');
//const vinkelTopp = document.getElementById('vink-topp');
//const content = document.querySelector('.content', '#rullegardin-id');
//const rullegardin = document.getElementById('rullegardin-id');
//const cfv = document.querySelector('.cfv');
const dropdownContent = document.querySelector('.dropdown-content');
const reviews = document.querySelector('.parent');

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

reviews.addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('vink-topp').classList.toggle('rotate'),
  dropdownContent.classList.toggle('show-dropdown');
  });
  
/* 
  
  document.body.addEventListener('click', () => {
   if (dropdownContent.className === 'dropdown-content show-dropdown') {
    dropdownContent.classList.toggle('show-dropdown');
  }
   });


document.querySelector('.cfv').addEventListener('click', () => {
document.getElementById('vinkel').classList.toggle('rotate'),
document.getElementById('rullegardin-id').classList.toggle('rullegardin-show');
});

*/