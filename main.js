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

  
  function myFunction() {
    var element = document.getElementById("rullegardin-id");
    element.classList.toggle("rullegardin-show");
  }



