const topBottom = () => {
  const top_bottom = document.querySelector(".top-bottom");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      top_bottom.classList.add("top-bottom__show");
    } else {
      top_bottom.classList.remove("top-bottom__show");
    }
  });
};
topBottom();

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  let curSlide = 0;
  const maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };
  goToSlide(0);
  setInterval(nextSlide, 5000);
};

slider();

const faq = (e) => {
  const questions = document.querySelectorAll(".faq__question-box");
  const answers = document.querySelectorAll(".faq__answer");

  questions[0].addEventListener("click", () => {
    answers[0].classList.toggle("faq__show");
  });
  questions[1].addEventListener("click", () => {
    answers[1].classList.toggle("faq__show");
  });
  questions[2].addEventListener("click", () => {
    answers[2].classList.toggle("faq__show");
  });
  questions[3].addEventListener("click", () => {
    answers[3].classList.toggle("faq__show");
  });
  questions[4].addEventListener("click", () => {
    answers[4].classList.toggle("faq__show");
  });
};

faq();

const navbar = () => {
  const burger = document.querySelector(".nav__burger");
  const navUl = document.querySelector(".nav__ul");
  burger.addEventListener("click", () => {
    navUl.classList.toggle("nav__show");
    burger.classList.toggle("nav__toggle");
  });
};
navbar();
