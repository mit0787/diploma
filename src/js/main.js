$(document).ready(function () {
  // настройки слайдера
  $('.portfolio__slider').slick({
    infinite: true,
    slidesToShow: 1,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right")
  });
  $('.clients__list').slick({
    infinite: true,
    slidesToShow: 5,
    prevArrow: $(".bracket__left"),
    nextArrow: $(".bracket__right"),
    responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
        }
      },
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
  // плавная прокрутка
  $('.go-anchor').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    $('html, body').animate({ scrollTop: dn }, 1000);
  });
  // очистка плейсхолдера
  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
      .attr('placeholder', '');
  }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
  // модальное окно
  $(document).ready(function () {
    var button = $(".modal-link");
    var modal = $("#modal");
    var close = $("#close");

    button.on("click", function () {
      modal.addClass("modal_active");
    });

    close.on("click", function () {
      modal.removeClass("modal_active")
    });
  });
  // валидация
  $("#hero-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Длина имени не меньше {0} символов"),
        maxlength: jQuery.validator.format("Длина имени не больше {0} символов")
      },
      phone: {
        required: "Заполните поле"
      },
      email: {
        required: "Заполните поле",
        email: jQuery.validator.format("Введите корректный email")
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });
  $("#modal-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Длина имени не меньше {0} символов"),
        maxlength: jQuery.validator.format("Длина имени не больше {0} символов")
      },
      phone: {
        required: "Заполните поле"
      },
      email: {
        required: "Заполните поле",
        email: jQuery.validator.format("Введите корректный email")
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });
  // Валидация телефона
  $(".phone").mask("8 (999) 999-999-99")
});