
// Selectors
const dropdownContent = document.querySelector('.dropdown-content');
const parent = document.querySelector('.parent');
const sidemenyHide = document.querySelector('.sidemeny_hide');

// Open nav bar when hamburger menu is clicked
document.getElementById('hambruger-menu').addEventListener('click', (e) => {
e.stopPropagation();
document.getElementById('nav-boxy').classList.toggle('show');
});
  
// Close hamburger menu if body is clicked ONLY when the menu is already visible
document.body.addEventListener('click', () => {
const navBoxEl = document.getElementById("nav-boxy")
if(navBoxEl.className === 'nav-boxy-class show') {
navBoxEl.classList.toggle('show');
}

});

// Show sidemenu and rotate arrow
parent.addEventListener('click', e  => {
e.stopPropagation();
document.getElementById('vink-topp').classList.toggle('rotate'),
dropdownContent.classList.toggle('show-dropdown');
sidemenyHide.classList.toggle('back');
});



