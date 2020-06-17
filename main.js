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


  
 document.getElementById ('tegz').onclick = function () {myFunctionz()};
 function myFunctionz() {
   document.getElementById('rullegardin-id').classList.toggle('rullegardin-show');
 } 

