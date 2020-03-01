
export default function initScrollSuave(){

const linkInterno = document.querySelectorAll('.menu-nav a[href^="#"] ');

function scrollToSection(event){
event.preventDefault();

const href = event.currentTarget.getAttribute('href');
const section = document.querySelector(href);

section.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
})
}






linkInterno.forEach((link) =>{
  link.addEventListener('click', scrollToSection)
})


}