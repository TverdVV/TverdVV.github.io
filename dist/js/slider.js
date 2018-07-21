$(document).ready(function () {
   $('.production-slider_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.production-slider_small',
    responsive: [
      {
        breakpoint: 768,
  //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          arrows: true,
          prevArrow: '<button type="button" class="left"></button>',
          nextArrow: '<button type="button" class="right"></button>',
        }
      }
    ]
  });
  $('.production-slider_small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.production-slider_big',
    dots: false,
    initialSlide: 3,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    responsive: [
        {
          breakpoint: 992,
    //сообщает, при какой ширине экрана нужно включать настройки
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        }
    ]
  });
   $('.comments-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="comment__left"></button>',
    nextArrow: '<button type="button" class="comment__right"></button>',
      responsive: [
        {
          breakpoint: 992,
    //сообщает, при какой ширине экрана нужно включать настройки
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
    //сообщает, при какой ширине экрана нужно включать настройки
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
});