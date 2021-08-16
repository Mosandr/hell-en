$('.testimonial__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  nextArrow: '.testimonials__next-btn',
  prevArrow: '.testimonials__prev-btn',
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  centerMode: true,
  slidesToShow: 3,
  speed: 500,
  infinite: true,
  cssEase: 'linear',
  variableWidth: true,
  asNavFor: '.testimonial__slider',
  arrows: false,
  focusOnSelect: true,
});
