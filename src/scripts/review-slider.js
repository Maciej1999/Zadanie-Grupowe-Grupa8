(() => {
  const dots = {
    dotOne: document.getElementById('dot-1'),
    dotTwo: document.getElementById('dot-2'),
    dotThree: document.getElementById('dot-3'),
  };

  let slideIndex = 1;
  showReviewNew(slideIndex);

  dots.dotThree.addEventListener('click', function () {
    showReviewNew(3);
  });
  dots.dotTwo.addEventListener('click', function () {
    showReviewNew(2);
  });
  dots.dotOne.addEventListener('click', function () {
    showReviewNew(1);
  });

  function showReviewNew(n) {
    let i;

    let slides = document.getElementsByClassName('review');
    let menu = document.getElementsByClassName('review__dot');

    for (i = 0; i < menu.length; i++) {
      menu[i].className = menu[i].className.replace(' review__dot--active', '');
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(' review--active', '');
    }

    slides[n - 1].className += ' review--active';
    menu[n - 1].className += ' review__dot--active';
  }
})();
