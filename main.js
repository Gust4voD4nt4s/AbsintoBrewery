

const MENUMOBILE = document.getElementById('menuMobile');
const cancelmenu = document.getElementById('cancelmenuMobile');

function menuResponsivo() {
    const navresponsiva = document.getElementById('navList');
    navresponsiva.classList.toggle('active');
}

MENUMOBILE.addEventListener('click', menuResponsivo);
cancelmenu.addEventListener('click', menuResponsivo);

$('.fullBackground').fullClip({
  images: ['Drinklaranja.png', 'Picanha.png', 'Drinklaranja2.png'],
  transitionTime: 2000,
  wait: 5000
});


$('.slider-principal').slick({
  dots: false,
  infinite: true,
  speed: 300,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 2000
})