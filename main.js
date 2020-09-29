
// Selectors
const dropdownContent = document.querySelector('.dropdown-content');
const parent = document.querySelector('.parent');
const sidemenyHide = document.querySelector('.sidemeny_hide');
const ove = document.querySelector('.ove');
const pilen = document.querySelector('.pilen');
const container = document.querySelector('.boks-rundt-hva');
const lesMer = document.querySelector('.lesMer');
const target = document.querySelector('.flexbox-med-logoer');
const test = document.querySelector('.test');
const sprak = document.querySelector('.sprak');
const lanGue = document.querySelector('.lan-gue');
const tryggPå = document.querySelector('.tryggPå');
const headlineTwo = document.querySelector('.flexbox-med-logoer');


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

// Show sidemenu
parent.addEventListener('click', e  => {
e.stopPropagation();
ove.classList.toggle('farge');
dropdownContent.classList.toggle('show-dropdown');
sidemenyHide.classList.toggle('back');
});

// hide sidemenu when body is clicked
document.body.addEventListener('click', () => { 
    if (dropdownContent.className === 'dropdown-content show-dropdown') {
        dropdownContent.classList.toggle('show-dropdown');
        ove.classList.toggle('farge');
    }
});


// Show more content on mobile version
pilen.addEventListener('click', () => {
    container.classList.toggle('skruPå');
    lesMer.classList.toggle('minusMargin');
    pilen.classList.toggle('rotate');
    target.scrollIntoView();
});

// Show language selector
sprak.addEventListener('click', f => {
    f.stopPropagation();
    test.classList.toggle('visFlagg');
    lanGue.classList.toggle('farge');
});

// hide language body is clicked
document.body.addEventListener('click', () => { 
    if (test.className === 'test visFlagg') {
        test.classList.toggle('visFlagg');
        lanGue.classList.toggle('farge');
        
    }
});

tryggPå.addEventListener('click', () => {
    headlineTwo.scrollIntoView();
});