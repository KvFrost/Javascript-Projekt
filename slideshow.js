let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {
  showSlides(slideIndex += x);
}

function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  let t;
  let slides = document.getElementsByClassName("slideshoow");
  let dots = document.getElementsByClassName("dots");

  if (x > slides.length) { slideIndex = 1 };
  if (x < 1) { slideIndex = slides.length };
  for (t = 0; t < slides.length; t++) {
    slides[t].style.display = "none";
  }
  for (t = 0; t < dots.length; t++) {
    dots[t].className = dots[t].className.replace("active", "");
  }
  slides[slideIndex -1].style.display = "block";
  dots[slideIndex -1].className += "active";
}