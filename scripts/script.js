$(document).ready(function(){
  const toggleOne = $('.menu-tab')
 $('#toggle-tab').click(function(){
  toggleOne.toggleClass('menu-tab--show');
  $('.promo').toggle('slow');
  $(this).toggleClass('cross-box__item2');
  $('.header-tab__link--white').toggleClass('header-tab__link');
 });
$('.b-header-tab__img').click(function(){
  toggleOne.toggle('slow');
});

//mobile toggler
 const toggler = $('.menu');
  $('.cross-box__item2--burger').click(function(){
    toggler.toggle('slow');
    $('.menu').toggleClass('menu--none');
  });
  $('.cross-box__item2--burger').click(function(){
    $(this).toggleClass('cross-box__item2');
  });

  //index toggler mobile
const togglerIndex = $('.mobile-promo');
  $('.cross-box__item2--white-burger').click(function(){
    togglerIndex.toggle('slow');
  });
   $('.cross-box__item2--white-burger').click(function(){
    $('.menu').css({'display' : 'flex'});
  });
 $('.cross-box2__item').click(function(){
  $('.mobile-promo').toggle('slow');
  $('.menu').toggle('slow');
 });
$('.gallery__photo').slick({
  slidesToShow: 6,
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: 400,
  responsive: [
{
  breakpoint: 769,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
 }
},
{
breakpoint: 400,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
   }
}
]
 });
$('.tutorial-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  dotsClass: "list-button",
  appendArrows: $('.left-btn'),
  prevArrow:'<a href="" class="left-btn"><img class="" src="img/Prev.jpg.png" alt=""></a>',
  appendArrows: $('.right-btn'),
  nextArrow: '<a href="" class="right-btn"><img src="img/next.jpg.png" alt=""></a>',
  responsive: [
{
  breakpoint: 400,
    settings: {
      dots: false
    }
}
  ]
 });
$('.instructors__list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  responsive: [
{
  breakpoint: 1000,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  }
},
{
  breakpoint: 402,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
  }
}
]
});
$('.other-trainers__list').slick({
  slidesToShow: 5,
  responsive: [
{
  breakpoint: 1000,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
  }
},
{
  breakpoint: 401,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  }
}
]
 });
$('.adapt-slider__coach').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "list-button",
});
});