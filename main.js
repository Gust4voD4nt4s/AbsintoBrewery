const MENUMOBILE = document.getElementById('menuMobile');
const cancelmenu = document.getElementById('cancelmenuMobile');

function menuResponsivo() {
    const navresponsiva = document.getElementById('navList');
    navresponsiva.classList.toggle('active');
}

$('.fullBackground').fullClip({
  images: ['house.jpg', 'road.jpg', 'winter.jpg'],
  transitionTime: 2000,
  wait: 5000
});

MENUMOBILE.addEventListener('click', menuResponsivo);
cancelmenu.addEventListener('click', menuResponsivo);
