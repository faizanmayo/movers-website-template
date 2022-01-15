// on scroll shadow
document.getElementById("year").innerHTML = new Date().getFullYear();
const headerShadow = () => {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  if (window.pageYOffset > 200) {
    header.classList.add("add-shadow");
  } else {
    header.classList.remove("add-shadow");
  }
};

window.addEventListener("scroll", headerShadow);
// slider js
$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
      }
    }

  })
});