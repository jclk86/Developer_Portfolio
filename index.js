let slideIndex = 1;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function typing(p) {
  $("#" + p).addClass("cursor");
  let text = $("#" + p).text(),
    randInt = 0;
  for (let i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(10, 140));
    let typing = setTimeout(
      function(y) {
        $("#" + p).append(text.charAt(y));
      },
      randInt,
      i
    );
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}

// Adds active class to menu
// $("#js-navbar-toggle").click(function() {
//   $("#js-menu").toggleClass("active");
// });

// Prev & Next arrows
$(".prev").click(function() {
  plusSlides(-1);
});

$(".next").click(function() {
  plusSlides(1);
});

// Clicking dots for image slider
$(".dot:nth-child(1)").click(function() {
  currentSlide(1);
});

$(".dot:nth-child(2)").click(function() {
  currentSlide(2);
});

$(".dot:nth-child(3)").click(function() {
  currentSlide(3);
});

$(".dot:nth-child(4)").click(function() {
  currentSlide(4);
});

$(window).resize(function() {
  $("#js-menu").removeClass("active");
});

$(document).ready(function() {
  typing("text");
  showSlides(slideIndex);
});
