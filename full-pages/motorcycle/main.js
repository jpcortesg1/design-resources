const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function setActive(i){
  for(slide of slides)
  slide.classList.remove("active");
  slides[i].classList.add("active");

  for(dot of dots)
  dot.classList.remove("active");
  dots[i].classList.add("active");
}

for (let i = 0; i < dots.length; i++){
  dots[i].addEventListener('click', function () {
    setActive(i);
  })
}