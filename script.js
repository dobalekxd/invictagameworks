const pageholderHTML = `
<a href="/invictagameworks/home/"><div id="pageholder-header">
    <div id="pageholder-logo"></div>
    <div id="pageholder-caption">Invicta Gameworks</div></a>
</div>
<div id="pageholder-options">
    <div id="mobile-view-open"><span><i class="fa-solid fa-angle-down"></i></span></div>
    <div id="mobile-view-close"><i class="fa-solid fa-xmark"></i></div>
    <a href="/invictagameworks/home/"><div class="option">Home</div></a>
    <a href="/invictagameworks/news/"><div class="option">News</div></a>
    <a href="https://forms.gle/p55imCZZ6Ak5Pn6E6"><div class="option">Apply</div></a>
</div>`;
const footerHTML = `
<div id="footer-header">
<a href=""><i class="fa-brands fa-discord"></i></a>
<a href=""><i class="fa-brands fa-twitter"></i></a>
<a href=""><i class="fa-brands fa-youtube"></i></a>
</div>
<div id="footer-logo">
<img src="https://i.ibb.co/vk9h9qr/invicta-logo-512x512.png" height="80px">Invicta Gameworks
</div>
<div id="footer-content">
<div class="footer-section">
    <h2>Created by Invicta</h2>
    <table>
        <tr>
            <td><a target="_blank" href="https://www.kogama.com/games/play/9915552/">Right After | Каруба</a></td>
            <td><a target="_blank" href="https://www.kogama.com/games/play/9842467/">Tofu Drivers: Delivery In Japan</a></td>
            <td><a target="_blank" href="https://www.kogama.com/games/play/7754983/">Quizzes</a></td>
        </tr>
        <tr>
            <td><a target="_blank" href="https://www.kogama.com/games/play/9217949/">The Skyscraper</a></td>
            <td><a target="_blank" href="https://www.kogama.com/games/play/10453526/">The Heart Of The North Pole</a></td>
            <td><a target="_blank" href="https://www.kogama.com/games/play/8390717/">The Invicta Stadium</a></td>
        </tr>
    </table>
</div>
<div class="footer-section">
    <h2>Become a Member</h2>
    <table>
        <tr>
            <td><a href="https://forms.gle/p55imCZZ6Ak5Pn6E6">Application</a></td>
            <td><a href="">Newcomers Brief</a></td>
        </tr>
        <tr>
            <td><a href="">Workstyle</a></td>
        </tr>
    </table>
</div>
<div class="footer-section">
    <h2>Contact</h2>
    <table>
        <tr>
            <td><a target="_blank" href="https://discord.com/invite/neJUeNeUaS">Discord Server</a></td>
        </tr>
        <tr>
            <td>invictagroupcontact@gmail.com</td>
        </tr>
    </table>
</div>
</div>`;
document.getElementById("pageholder").innerHTML = pageholderHTML;
document.getElementById("footer").innerHTML = footerHTML;
const options = document.querySelectorAll("#pageholder-options .option");
if (window.location.href.includes("home")) {
  options[0].classList.add("active");
} else if (window.location.href.includes("news")) {
  options[1].classList.add("active");
}
var prevScrollPosition = window.pageYOffset;
window.onscroll = function () {
  var currentSCrollPosition = window.pageYOffset;
  var pageholder = document.getElementById("pageholder");
  if (prevScrollPosition < currentSCrollPosition && prevScrollPosition > 800) {
    pageholder.style.top = "-80px";
  } else {
    pageholder.style.top = "0";
  }
  prevScrollPosition = currentSCrollPosition;
};
document
  .getElementById("mobile-view-open")
  .addEventListener("click", function () {
    document.getElementById("pageholder-options").classList.add("mobile");
    document.body.classList.add("overflow-hidden");
  });
document
  .getElementById("mobile-view-close")
  .addEventListener("click", function () {
    document
      .getElementById("pageholder-options")
      .classList.add("mobile-removed");
    document.body.classList.remove("overflow-hidden");
    setTimeout(function () {
      document.getElementById("pageholder-options").classList.remove("mobile");
      document
        .getElementById("pageholder-options")
        .classList.remove("mobile-removed");
    }, 500);
  });

function animateOnScroll() {
  const elements = document.querySelectorAll(".anim-fade-in-on-scroll");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight) {
      element.classList.add("anim-triggered-scroll-down");
    }
  });
}
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

let gameInfoSliders = [];
let gameInfoSliderElements = document.querySelectorAll(".game-info-slider");
gameInfoSliderElements.forEach((element) => {
  let gameInfoSlider = {
    gameInfoSliderElement: element,
    paginationBullets: element.querySelectorAll(
      ".section-slider .section-pagination .section-pagination-bullet"
    ),
    sections: [],
    descriptions: element.querySelectorAll(
      ".section-slider .section-description-container .section-description"
    ),
  };

  let sections = element.querySelectorAll(
    ".game-info-slider-gallery .gallery-section"
  );
  sections.forEach((element) => {
    let section = [];
    let slides = element.querySelectorAll(".slide");
    section.push(element);
    section.push(slides);
    let paginationSlides = element.querySelectorAll(
      ".gallery-section-pagination .pagination-slide-container"
    );
    section.push(paginationSlides);
    gameInfoSlider.sections.push(section);
  });

  gameInfoSliders.push(gameInfoSlider);
});
console.log(gameInfoSliders);

gameInfoSliders.forEach((gameInfoSlider) => {
  gameInfoSlider.paginationBullets.forEach((element, index) => {
    element.addEventListener("click", function () {
      gameInfoSlider.paginationBullets.forEach((element) => {
        element.classList.remove("active");
      });
      gameInfoSlider.descriptions.forEach((element) => {
        element.classList.remove("active");
      });
      gameInfoSlider.gameInfoSliderElement.querySelectorAll(".game-info-slider-gallery .gallery-section.active").forEach(section=>{
        if(section != gameInfoSlider.sections[index][0]){
        section.classList.add("hidden");
        section.classList.remove("active");
        setTimeout(function(){
            section.classList.remove("hidden");
        }, 500)
        }
      })
      gameInfoSlider.sections[index][0].classList.add("active");
      gameInfoSlider.descriptions[index].classList.add("active");
      element.classList.add("active");
    });
  });
  gameInfoSlider.sections.forEach((section, sectionIndex) => {
    section[1].forEach((slide, index) => {
      section[2][index].querySelector(".pagination-slide").style.backgroundImage =
        window.getComputedStyle(slide).backgroundImage;
    });
    section[2].forEach((bullet, index) => {
      bullet.addEventListener("click", function () {
        gameInfoSlider.sections[sectionIndex][2].forEach((element) => {
          element.classList.remove("active");
        });
        bullet.classList.add("active");
        section[0].querySelectorAll(".slide.active").forEach((slide) => {
          if (slide != section[1][index]) {
            slide.classList.add("hidden");
            slide.classList.remove("active");
            setTimeout(function () {
              slide.classList.remove("hidden");
            }, 500);
          }
        });
        section[1][index].classList.add("active");
      });
    });
  });
  gameInfoSlider.paginationBullets[0].classList.add("active");
  gameInfoSlider.sections[0][0].classList.add("active");
  gameInfoSlider.descriptions[0].classList.add("active");
  gameInfoSlider.sections.forEach(section=>{
    section[1][0].classList.add("active");
    section[2][0].classList.add("active");
  })
});
