   let menu = document.querySelector('#menu-bars');
   let navbarCustom = document.querySelector('.navbar-custom');

   menu.onclick = () => {
     menu.classList.toggle('fa-times');
     navbarCustom.classList.toggle('active');
   }