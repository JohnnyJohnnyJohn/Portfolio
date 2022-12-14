const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const heroName = document.querySelector("#heroName")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

const circles = document.querySelectorAll("circle");
const percents = document.querySelectorAll(".percent");
const comp = document.querySelector("#competences");

let j=0;

percents.forEach(element => {
  let percent = element.style.cssText[23] + element.style.cssText[24];
  
  percent = 440 - 4.4 * percent;
    
  circles[j].style = `stroke-dashoffset: ${percent};`;
  circles[j+1].style = `stroke-dashoffset: ${percent};`;
  
  j=j+2;
});

window.onscroll = () => animeCompetences();

window.onload = () => animeCompetences();

window.onload = () => document.getElementById("frame").setAttribute("src", "");

function animeCompetences () {

  if (window.scrollY >= 400) {
    document.querySelectorAll(".dot").forEach(element => {
      element.classList.add("animeDot");
      element.style.visibility = "visible"
    });

    document.querySelectorAll("circle:nth-child(2)").forEach(element => {
      element.classList.add("animeCircle");
    });

    document.querySelectorAll(".inCircle img").forEach(element => {
      element.classList.add("animeCircle");
    });

    document.querySelector("#competences h1").classList.add("slideInFromUp");

    }
    
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll(".dot").forEach(element => {

  element.addEventListener('mouseenter',function () {
    element.parentElement.children[2].children[0].classList.add("flip");
    element.parentElement.children[2].children[1].classList.remove("flip");
  });

  element.addEventListener('mouseleave',function () {
    element.parentElement.children[2].children[0].classList.remove("flip");
    element.parentElement.children[2].children[1].classList.add("flip");
  });
});
  
document.getElementById("frameBtn").addEventListener('click',function () {
  document.getElementById("frame").className = "open";
  document.getElementById("closeBtn").classList.add("actif");
});

document.getElementById("closeBtn").addEventListener('click',function () {
  document.getElementById("frame").className = "close";
  document.getElementById("frame").setAttribute("src", "");
  document.getElementById("closeBtn").classList.remove("actif");
});