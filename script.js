const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

if (toggle) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

const heroImage = document.querySelector('.hero-photo');
const heroSlides = [
  'assets/images/badminton.jpg',
  'assets/images/nobar.jpg',
  'assets/images/tangga.jpg',
  'assets/images/1.jpg',
  'assets/images/2.jpg',
  'assets/images/3.jpg'
];

if (heroImage && heroSlides.length) {
  let heroIndex = 0;

  const showHeroSlide = () => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroImage.style.opacity = '0.25';

    setTimeout(() => {
      heroImage.src = heroSlides[heroIndex];
      heroImage.alt = `Foto kelas ARMATA-24 ${heroIndex + 1}`;
      heroImage.style.opacity = '1';
    }, 180);
  };

  heroImage.src = heroSlides[0];
  heroImage.alt = 'Foto kelas ARMATA-24 1';
  setInterval(showHeroSlide, 5000);
}

document.querySelectorAll('[data-image]').forEach((item) => item.addEventListener('click', () => {
  document.querySelector('.lightbox img').src=item.dataset.image;
  document.querySelector('.lightbox').classList.add('open');
}));

document.querySelector('.lightbox button')?.addEventListener('click', () => {
  document.querySelector('.lightbox').classList.remove('open');
});
