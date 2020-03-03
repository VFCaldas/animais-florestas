export default function initAnimacaoScroll() {

  const sections = document.querySelectorAll('[data-scroll]');
  const trackWindow = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = (sectionTop - trackWindow) < 0;
      if (sectionHeight) {
        section.classList.add('ativo');
      }
    })

  }



  window.addEventListener('scroll', animaScroll)


}