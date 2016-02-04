$(document).ready(function() {
  $('#button p').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.bold').animate({'opacity': '1'});
  });
  $('#button').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
  $('#tab').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('#tab').animate({'opacity': '1'});
  });
  $("#toggle").click(function(){
    $(this).toggle("explode")
  })
});
