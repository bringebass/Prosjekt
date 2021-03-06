
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
const cookieThing = document.querySelector(".cookiething");
const cookieButton = document.querySelector(".cookieButton");
const firstBox = document.querySelector(".first-box99");
const trekant = document.querySelector(".trekant");
const sergjei2 = document.querySelector(".sergjei2");
const disclosure = document.querySelector(".disclosure1807");
const littaBox = document.querySelector(".littabox1807");


/* Selectors */

const showDropdownFirstBox = document.querySelector('.showDropdownFirstBox99');
const DropdownFirstBox = document.querySelector('.dropdown-first-box99');
const showDropdownSecondBox = document.querySelector('.showDropdownSecondBox99');
const DropdownSecondBox = document.querySelector('.dropdown-second-box99');
const showDropdownThirdBox = document.querySelector('.showDropdownThirdBox99');
const DropdownThirdBox = document.querySelector('.dropdown-third-box99');
const showDropdownFourthBox = document.querySelector('.showDropdownFourthBox99');
const DropdownFourthBox = document.querySelector('.dropdown-fourth-box99');
const showDropdownFiftBox = document.querySelector('.showDropdownFiftBox99');
const DropdownFiftBox = document.querySelector('.dropdown-fift-box99');


const arrow1 = document.querySelector('.arrow199');
const arrow2 = document.querySelector('.arrow299');
const arrow3 = document.querySelector('.arrow399');
const arrow4 = document.querySelector('.arrow499');
const arrow5 = document.querySelector('.arrow599');

const infoBoks = document.querySelector('.hello___there');
const infoContent = document.querySelector('.test45678');

const sideBarFirst = document.querySelector('.sidebar__first');
const sideBarFirstDropown = document.querySelector('.sidebar__first__dropdown');
const losAngeles = document.querySelector('.losAngeles');
const sideBarSecond = document.querySelector('.sidebar__second');
const sideBarSecondDropown = document.querySelector('.sidebar__second__dropdown');
const losAngeles2 = document.querySelector('.losAngeles2');
const sideBarThird = document.querySelector('.sidebar__third');
const sideBarThirdDropown = document.querySelector('.sidebar__third__dropdown');
const losAngeles3 = document.querySelector('.losAngeles3');
const sideBarFourth = document.querySelector('.sidebar__fourth');
const sideBarFourthDropown = document.querySelector('.sidebar__fourth__dropdown');
const losAngeles4 = document.querySelector('.losAngeles4');
const sideBarFift = document.querySelector('.sidebar__fift');
const sideBarFiftDropown = document.querySelector('.sidebar__fift__dropdown');
const losAngeles5 = document.querySelector('.losAngeles5');

const sideBarSixt = document.querySelector('.sidebar__sixt');
const sideBarSixtDropown = document.querySelector('.sidebar__sixt__dropdown');
const losAngeles6 = document.querySelector('.losAngeles5');

if (sideBarFirst) {
    sideBarFirst.addEventListener('click', () => {
    sideBarFirstDropown.classList.toggle('show')
    losAngeles.classList.toggle('rotate');
    })
};

if (sideBarSecond) {
    sideBarSecond.addEventListener('click', () => {
    sideBarSecondDropown.classList.toggle('show')
    losAngeles2.classList.toggle('rotate');
    })
};

if (sideBarThird) {
    sideBarThird.addEventListener('click', () => {
    sideBarThirdDropown.classList.toggle('show')
    losAngeles3.classList.toggle('rotate');
    })
};

if (sideBarFourth) {
    sideBarFourth.addEventListener('click', () => {
    sideBarFourthDropown.classList.toggle('show')
    losAngeles4.classList.toggle('rotate');
    })
};

if (sideBarFift) {
    sideBarFift.addEventListener('click', () => {
    sideBarFiftDropown.classList.toggle('show')
    losAngeles5.classList.toggle('rotate');
    })
};

if (sideBarSixt) {
    sideBarSixt.addEventListener('click', () => {
    sideBarSixtDropown.classList.toggle('show')
    losAngeles6.classList.toggle('rotate');
    })
};

if (tryggPå) {
    tryggPå.addEventListener('click', () => {
        headlineTwo.scrollIntoView();
    });
}    

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
if (parent) {
parent.addEventListener('click', e  => {
e.stopPropagation();
ove.classList.toggle('farge');
dropdownContent.classList.toggle('show-dropdown');
sidemenyHide.classList.toggle('back');
});
}

if (parent){
parent.addEventListener('click', e  => {
    e.stopPropagation();
    trekant.classList.toggle('show-dropdown');
});
}

if (dropdownContent) {
document.body.addEventListener('click', () => { 
    if (dropdownContent.className === 'dropdown-content show-dropdown') {
        trekant.classList.toggle('show-dropdown');
      
    }
});
}

// Show disclosure thing
if (infoBoks) {
    infoBoks.addEventListener('click', e => {
    infoContent.classList.toggle('show-dropdown');
    }
)};



// hide sidemenu when body is clicked
if (dropdownContent) {
document.body.addEventListener('click', () => { 
    if (dropdownContent.className === 'dropdown-content show-dropdown') {
        dropdownContent.classList.toggle('show-dropdown');
        ove.classList.toggle('farge');
    }
});
}


if (disclosure) {
    disclosure.addEventListener('click', () => {
        littaBox.classList.toggle('show'); 
    }
    )};


// Show more content on mobile version
if (pilen) {
pilen.addEventListener('click', () => {
    container.classList.toggle('skruPå');
    lesMer.classList.toggle('minusMargin');
    pilen.classList.toggle('rotate');
    target.scrollIntoView();
});}

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




cookieButton.addEventListener('click', () => {
    cookieThing.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieThing.classList.add("active");
}, 1000);

function showDropdowns (c, b, d) {
    c.addEventListener("click", () => {
        b.classList.toggle("show99");
        d.classList.toggle("rotate99");
    
    }
    )};
    
    
    
    showDropdowns (showDropdownFirstBox, DropdownFirstBox, arrow1);
    showDropdowns (showDropdownSecondBox, DropdownSecondBox, arrow2);
    showDropdowns (showDropdownThirdBox, DropdownThirdBox, arrow3);
    showDropdowns (showDropdownFourthBox, DropdownFourthBox, arrow4);
    showDropdowns (showDropdownFiftBox, DropdownFiftBox, arrow5);