// $(window).on("load", function() {
//     change('home');
// });

$(function(){
  $('.nav-element').click(function(section){
    var section = $(this).text().toLowerCase();
    console.log(section);
    $('section').slideUp();
    $('#'+section).removeClass('hidden');
    $('#'+section).slideDown();
    $('.nav-element').removeClass('active');
    $(this).addClass('active');
  });
});

var link = function(path) {
    console.log(path);
    window.location = path;
}
