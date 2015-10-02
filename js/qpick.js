$(function() {
  $('#nav-top ul li a').click(function() {
    var hash = $(this).closest('a').attr('href');
    $('html, body').animate({scrollTop: $(hash).offset().top}, 400);
    return false;
  });
});
