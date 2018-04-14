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
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
})
});