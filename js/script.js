$(document).ready(function(){
  $('.carousel_inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false,
              }
          }
      ]
  });
(function($) {
    $(function() {
    $('ul.labels__tabs').on('click', 'li:not(.labels__tab_active)', function() {
        $(this)
          .addClass('labels__tab_active').siblings().removeClass('labels__tab_active')
          .closest('div.container').find('div.labels__content').removeClass('labels__content_active').eq($(this).index()).addClass('labels__content_active');
        });
    });
})(jQuery)});
(function($) {
  $(function() {
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);
// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
