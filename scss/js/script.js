$(document).ready(function () {
  
 
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  });
  $(".header__submenu1").hide();

  $(".header__dropmenu1").click(function () {
    $(".header__add1").toggleClass("flaticon-minus");
    $(".header__submenu1").toggle();
  });
  $(".header__submenu2").hide();
  $(".header__dropmenu2").click(function () {
    $(".header__add2").toggleClass("flaticon-minus");
    $(".header__submenu2").toggle();
  });

  $(".up__button").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });

  const btnHamburger = document.querySelector("#btnHamburger");
  const header = document.querySelector(".header");
  const fadeElems = document.querySelectorAll(".has-fade");
  const subMenu = document.querySelector("#subMenu");
  btnHamburger.addEventListener("click", function () {
    console.log("click hamburger");

    if (header.classList.contains("open")) {
      //close hambergur menu
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      //open hambergur menu
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  });
});
