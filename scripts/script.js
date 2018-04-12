$(document).ready(function(){
  const toggleOne = $('.tablet-menu')
 $('#toggle-tab').click(function(){
  toggleOne.toggle('slow');
  toggleOne.toggleClass('tablet-menu--none');
 });

 const toggler = $('.menu');
  $('.cross-box__item2--burger').click(function(){
    toggler.toggle('slow');
    $('.menu').toggleClass('menu--none');
  });
 const togglerTwo = $('.b-tablet-menu');
  $('.b-header-tab__img').click(function(){
    togglerTwo.toggle('slow')
    togglerTwo.toggleClass('b-tablet-menu--none');
  });
  $('.cross-box__item2--burger').click(function(){
    $(this).toggleClass('cross-box__item2');
  });
})