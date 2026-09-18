const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

if (toggle && links) {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.querySelectorAll('a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!links.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });
}

const heroImages = document.querySelectorAll('.hero-photo');
const heroSlideGroups = [
  [
    'assets/images/badminton.jpg',
    'assets/images/nobar.jpg',
    'assets/images/tangga.jpg',
    'assets/images/KELAS1.jpg',
    'assets/images/KELAS1I7.jpg',
    'assets/images/KELAS10.jpg',
    'assets/images/KELAS11.jpg',
    'assets/images/KELAS13.jpg',
    'assets/images/KELAS14.jpg',
    'assets/images/KELAS199.jpg'
  ],
  [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/KELAS15.jpg',
    'assets/images/KELAS16.jpg',
    'assets/images/KELAS17.jpg',
    'assets/images/KELAS18.jpg',
    'assets/images/KELAS19.jpg',
    'assets/images/KELAS121.jpg',
    'assets/images/KELAS99.jpg'
  ]
];

if (heroImages.length) {
  heroImages.forEach((heroImage, imageIndex) => {
    const heroSlides = heroSlideGroups[imageIndex];

    if (!heroSlides) {
      return;
    }

    let heroIndex = 0;

    const showHeroSlide = () => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroImage.style.opacity = '0.25';

      setTimeout(() => {
        heroImage.src = heroSlides[heroIndex];
        heroImage.alt = `Foto kelas ARMATA-24 ${imageIndex * 3 + heroIndex + 1}`;
        heroImage.style.opacity = '1';
      }, 180);
    };

    heroImage.src = heroSlides[0];
    heroImage.alt = `Foto kelas ARMATA-24 ${imageIndex * 3 + 1}`;
    setInterval(showHeroSlide, 5000);
  });
}

document.querySelectorAll('[data-image]').forEach((item) => item.addEventListener('click', () => {
  document.querySelector('.lightbox img').src=item.dataset.image;
  document.querySelector('.lightbox').classList.add('open');
}));

document.querySelector('.lightbox button')?.addEventListener('click', () => {
  document.querySelector('.lightbox').classList.remove('open');
});
