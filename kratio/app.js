$(document).ready(function() {
  $('td').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.bold').animate({'opacity': '1'});
  });
  $('aside').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
  $('#tab').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('#tab').animate({'opacity': '1'});
  });
  $("aside").click(function(){
    $(this).aside("explode")
  })
});
