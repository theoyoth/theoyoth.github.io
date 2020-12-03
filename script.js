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
function scrollAppear(){
  const text = document.querySelector('.about-me');
  const heighText = text.getBoundingClientRect().top;
  const heighWindow = window.innerHeight/3;
  // console.log(heighWindow);

  if(heighText<heighWindow){
    text.classList.add('textAppear');
  }
}

  window.addEventListener('scroll',scrollAppear);
