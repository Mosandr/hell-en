$(function () {
  $('.long-switch-btn').on("click",function (e) {
    $('.testimonial__description').toggleClass('testimonial__description--long');
  });

  $('.short-switch-btn').on("click",function (e) {
    $('.testimonial__description').toggleClass('testimonial__description--long');
  });
});