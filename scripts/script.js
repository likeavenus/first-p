$(document).ready(function(){
  $('.tablet-menu').hide();
 $('#toggle-tab').click(function(){
  $('.tablet-menu').toggle(250);
 });
 const toggler = $('.cross-box__item2');
  toggler.click(function(){
    $('.menu').toggleClass('menu--none');
  });
 const togglerTwo = $('.b-header-tab__img');
  togglerTwo.click(function(){
    $('.b-tablet-menu').toggleClass('b-tablet-menu--none');
  });
});