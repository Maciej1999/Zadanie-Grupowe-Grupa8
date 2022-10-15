let slideIndex = 1;
showReview(slideIndex);

function currentReview(n) {
  showReview((slideIndex = n));
}

function showReview(n) {
  let i;
  let slides = document.getElementsByClassName("review");
  let dots = document.getElementsByClassName("review__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" review__dot--active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " review__dot--active";
}
