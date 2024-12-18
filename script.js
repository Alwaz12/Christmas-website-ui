// menu-icon

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  if (menu.classList.contains('ri-menu-3-fill')) {
    menu.classList.remove('ri-menu-3-fill');
    menu.classList.add('ri-close-large-fill');
  } else {
    menu.classList.remove('ri-close-large-fill');
    menu.classList.add('ri-menu-3-fill');
  }
  navbar.classList.toggle('open');
};


//timer

function startCountdown() {
  const targetDate = new Date('December 25, 2024 00:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / (1000));


      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
  }

  setInterval(updateTimer, 1000);
}

startCountdown();

//gsap

//hero
gsap.from('.hero-1', 1.2, {opacity:0, y:-150, delay: 0.5})
gsap.from('.hero-2', 1.2, {opacity:0, y:-150, delay: 1.2})
gsap.from('.hero-3', 1.2, {opacity:0, y:150, delay: 1.9})
gsap.from('.hero-4', 1.2, {opacity:0, y:150, delay: 2.5})
gsap.from('.hero-5', 1.2, {opacity:0, y:150, delay: 3.8})
gsap.from('.hero-6', 1.2, {opacity:0, y:-150, delay: 5.1})
gsap.from('.hero-7', 1.2, {opacity:0, y:150, delay: 6.5})
gsap.from('.hero-8', 1.2, {opacity:0, y:150, delay: 4.5})
gsap.from('.hero__description', 1.2, {opacity:0, y:-150, delay: 5.3})
gsap.from('.hero-btn', 1.2, {opacity:0, y:150, delay: 5.5})


//timer
gsap.from('.countdown__title', 1.2, {opacity:0, y:-150, delay: 7.5})
gsap.from('.countdown__description', 1.2, {opacity:0, y:150, delay: 8.9})
gsap.from('.countdown__timer', 1.2, {opacity:0, x:150, delay: 9.5})
gsap.from('.count-1', 1.2, {opacity:0, x:-150, delay: 9.1})
gsap.from('.count-2', 1.2, {opacity:0, x:-150, delay: 9.9})
gsap.from('.count-3', 1.2, {opacity:0, y:-150, delay: 10.3})
gsap.from('.count-4', 1.2, {opacity:0, y:-150, delay: 10.7})
gsap.from('.count-5', 1.2, {opacity:0, y:-150, delay: 10})


//about
gsap.from('.about-christmas__title', 1.2, {opacity:0, x:-150, delay: 10.5})
gsap.from('.about-christmas__description', 1.2, {opacity:0, x:-150, delay: 10.9})
gsap.from('.about-btn', 1.2, {opacity:0, y:150, delay: 11})
gsap.from('.about-icons', 1.2, {opacity:0, x:-150, delay: 11.3})
gsap.from('.right-image', 1.2, {opacity:0, y:-150, delay: 11.7})


//decoration
gsap.from('.decoration__title', 1.2, {opacity:0, y:-150, delay: 12.2})
gsap.from('.decoration__description', 1.2, {opacity:0, y:-150, delay: 12.5})
gsap.from('.card-1', 1.2, {opacity:0, y:-150, delay: 13})
gsap.from('.card-2', 1.2, {opacity:0, y:-150, delay: 13.3})
gsap.from('.card-3', 1.2, {opacity:0, y:-150, delay: 13.6})


//WHY
gsap.from('.why-title', 1.2, {opacity:0, x:-150, delay: 15.5})
gsap.from('.text-1', 1.2, {opacity:0, x:-150, delay: 15.9})
gsap.from('.text-2', 1.2, {opacity:0, y:150, delay: 16.3})
gsap.from('.center-image', 1.2, {opacity:0, x:-150, delay: 16.8})

