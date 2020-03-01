
export default function initScrollTop() {

  const button = document.querySelector('[data-button="scrolltop"]');

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled >coords) {
      button.classList.add('ativo');
    }
    if (scrolled <coords) {
      button.classList.remove('ativo');
    }
  }
  function scrollTop(event) {
    event.preventDefault();
    const buttonTop = window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  window.addEventListener('scroll', trackScroll);
  button.addEventListener('click', scrollTop)
}
