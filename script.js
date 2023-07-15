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

window.onload = () => {
  animeCompetences();
  document.getElementById("marioFrame").setAttribute("src", "");
  document.getElementById("cineFrame").setAttribute("src", "");
  document.getElementById("calcFrame").setAttribute("src", "");
  document.getElementById("autoFrame").setAttribute("src", "");
  document.getElementById("sellphoneFrame").setAttribute("src", "");
}

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

document.querySelectorAll(".frameBtn").forEach(element => {
  element.addEventListener('click',function () {
    console.table(document.querySelectorAll(".frame"));
    document.querySelectorAll(".frame").forEach(frame => {
      if (frame.id == element.target) {
        frame.classList.add("open");
        frame.classList.remove("close");
        frame.focus();
      } else {
        frame.classList.add("close");
        frame.classList.remove("open");
        frame.setAttribute("src", "");
      }

      document.getElementById("closeBtn").classList.add("actif");
      document.getElementById("closeBtn").style.zIndex = "3000";
    
      document.body.style.overflow = "hidden";
    });
  });
});

document.querySelector("#closeBtn").addEventListener('click', () => {
  console.table(document.querySelectorAll(".frame"));
  document.querySelectorAll(".frame").forEach(frame => {
    console.log("ok");
    frame.classList.add("close");
    frame.classList.remove("open");
    frame.setAttribute("src", "");

    document.getElementById("closeBtn").classList.remove("actif");
    document.getElementById("closeBtn").style.zIndex = "1";
  
    document.body.style.overflow = "auto";
    
  });
});
