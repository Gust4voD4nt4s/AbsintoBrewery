const MENUMOBILE = document.getElementById('menuMobile');
const cancelmenu = document.getElementById('cancelmenuMobile');

function menuResponsivo() {
    const navresponsiva = document.getElementById('navList');
    navresponsiva.classList.toggle('active');
}

MENUMOBILE.addEventListener('click', menuResponsivo);
cancelmenu.addEventListener('click', menuResponsivo);

$('.fullBackground').fullClip({
  images: ['drink1.jpg', 'picanha-na-brasa.jpg', 'drink3.jpg'],
  transitionTime: 2000,
  wait: 5000
});

$('.slider-principal').slick({
  dots: false,
  infinite: false,
  speed: 300,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 2000
})
 