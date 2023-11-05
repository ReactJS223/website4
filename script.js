$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sub-images',
  });

  $('.sub-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});
