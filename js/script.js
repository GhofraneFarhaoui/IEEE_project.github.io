// typescript library
var typed = new Typed('.type', {
  strings: ['Leader', 'Shaper', 'Leader', 'Shaper'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

// tkhabi scrolling
const header = document.querySelector('.header-main');
let lastScroll = 0;

function onScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // kif nahbet tenaha
    header.classList.add('hide');
  } else {
    //kif natla3 to4her
    header.classList.remove('hide');
  }
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}

window.addEventListener('scroll', onScroll);

// nedi aala modal
const modal = document.getElementById('myModal');
//nedi aala span
const span = document.getElementsByClassName('close')[0];
// button yhel modal
document.getElementById('button').addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'block';

  
});
// kif no9ress aala span yokhrej
span.addEventListener('click', function () {
  modal.style.display = 'none';
});
//kif no9ress barra zda yokhrej
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// ywari w ykahbbi l button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var backToTopButton = document.getElementById('backToTopBtn');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// yhez lfou9 kif teckliki aala button
function topFunction() {
  document.documentElement.scrollTop = 0;
}
