function toggle() {
  const toggleMenu = document.querySelector('.menu-toggle');
  const burger = document.querySelector('.toggle-img');

  burger.addEventListener('click', function () {
    toggleMenu.classList.toggle("menu-active");
  }) 
}
toggle();

// =========================================================== 

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  const toggleMenu = document.querySelector('.menu-toggle');
  toggleMenu.classList.remove('menu-active')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

// ============================================================
