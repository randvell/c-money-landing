document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger-btn');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav') as HTMLElement;

  if (!burgerBtn || !header || !nav) {
    return;
  }

  document.body.classList.add('no-transition');

  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 100);

  const handleViewportChange = () => {
    const isMobile = window.innerWidth <= 720;

    if (!isMobile && header.classList.contains('menu-open')) {
      header.classList.remove('menu-open');
    }

    nav.style.transform = '';
  };

  handleViewportChange();

  let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
  window.addEventListener('resize', () => {
    if (resizeTimeout) {
      window.clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(handleViewportChange, 150);
  });

  let isOpen = false;
  burgerBtn.addEventListener('click', function () {
    header.classList.toggle('menu-open');
    isOpen = !isOpen;
    burgerBtn.dataset.state = isOpen ? 'open' : 'closed';
  });

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Node)) {
      return;
    }

    if (
      !header.contains(event.target) &&
      header.classList.contains('menu-open')
    ) {
      header.classList.remove('menu-open');
    }
  });
});
