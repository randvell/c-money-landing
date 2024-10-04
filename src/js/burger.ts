document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger-btn');
  const header = document.querySelector('.header');

  if (!burgerBtn || !header) return;

  burgerBtn.addEventListener('click', function () {
    header.classList.toggle('menu-open');
  });

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Node)) return;

    if (
      !header.contains(event.target) &&
      header.classList.contains('menu-open')
    ) {
      header.classList.remove('menu-open');
    }
  });
});
