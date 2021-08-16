$(document).on('ready', function () {
  $('.testimonial__slider').slick({
    infinite: true,
    slidesToShow: 1,
    nextArrow: '.testimonials__next-btn',
    prevArrow: '.testimonials__prev-btn',
  });
});
