$(document).ready(function () {
  // вызов слайдера
  $('.portfolio__slider').slick({
    infinite: true,
    slidesToShow: 1,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right"),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true
        }
      }
      ]
  });
  // выпадающее меню
  $('.burger__menu').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('burger__menu_active');
    $('.burger-list').addClass('burger-list_active');
    $('.burger__cross').addClass('burger__cross_active');
  });
  $('.burger__cross').on('click', function (e) {
    e.preventDefault();
    $(this).removeClass('burger__cross_active');
    $('.burger-list').removeClass('burger-list_active');
    $('.burger__menu').removeClass('burger__menu_active');
  });
  $('.burger__item').on('click', function (e) {
    $('.burger__cross').removeClass('burger__cross_active');
    $('.burger-list').removeClass('burger-list_active');
    $('.burger__menu').removeClass('burger__menu_active');
  });
});