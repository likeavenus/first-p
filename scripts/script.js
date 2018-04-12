$(document).ready(function(){
 $('#toggle-tab').click(function(){
  $('.tablet-menu').toggle(250);
 });
 const toggler = $('.cross-box__item2');
  toggler.click(function(){
    $('.menu').toggleClass('menu--none');
  });

});