$(document).ready(function(){
 $('#toggle-tab').click(function(){
  $('.tablet-menu').toggle(200);
 });
 $('.header').hide();
  $('.cross-box__item2').click(function(){
    $('.header').toggle('slow');
  });

});