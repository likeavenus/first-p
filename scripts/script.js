$(document).ready(function(){
  const toggleOne = $('.tablet-menu')
 $('#toggle-tab').click(function(){
  toggleOne.toggle('slow');
  toggleOne.toggleClass('tablet-menu--none');
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

  //Tablet toggler
 const togglerTwo = $('.b-tablet-menu');
  $('.b-header-tab__img').click(function(){
    togglerTwo.toggle('slow');
    togglerTwo.toggleClass('b-tablet-menu--none');
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
  $('.menu').css({'display' : 'none'});
 });
});
    // $('.menu').prepend('<div class="cross-box"><a class="cross-box__link" href="https://likeavenus.github.io/first-p/"><span class="cross-box__item1">ice age</span></a><a href="#" class="cross-box__item2"></a></div>');
    // $('.cross-box__item2').css({'margin-right' : '15px'});