  // Open nav bar when hamburger menu is clicked
  document.getElementById('hambruger-menu').addEventListener('click', (e, r) => {
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

  
  
  function myFunction (x) {
    if (x.matches) {
      document.getElementById('element1').innerHTML ='Content';

      } else {document.getElementById('element1').innerHTML = 'Types of webhosting';   
    }
  }

  let x = window.matchMedia('(max-width: 670px)')
  myFunction(x)
  x.addListener (myFunction);


//test

document.getElementById('tegz').addEventListener('click', (e,) => {
  e.stopPropagation();
  document.getElementById('rullegardin-id').classList.toggle('rullegardin-show');
  
  if(window.scrollY==0)
  window.scrollBy(0, 100);
});









//test


//den som fungerer er nedenfor//
  
 //document.getElementById ('tegz').onclick = function () {myFunctionz()};
 //function myFunctionz() {
  // document.getElementById('rullegardin-id').classList.toggle('rullegardin-show');
 //} 

