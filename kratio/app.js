$(document).ready(function() {
  $('#working').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.5'});
  });
  $('#working').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
  $('body').on('click', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.9'});
  });
  $('body').on('click', function() {
    $(this).removeClass('highlight');
  });

  $('div').on('click', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.7'});
  });
  $('div').on('click', function() {
    $(this).removeClass('highlight');
  });

  $('section').on('click', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.7'});
  });
  $('section').on('click', function() {
    $(this).removeClass('highlight');
  });
  $('header').on('click', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.5'});
  });
  $('header').on('click', function() {
    $(this).removeClass('highlight');
  });

  var modWidth = 30;
$("#right table tr #food img").on("mouseenter", function() {
$(this).innerWidth(modWidth).addClass("mod");
modWidth -= 8;
});

  $('#working').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).animate({'opacity': '.9'});
  });
});
