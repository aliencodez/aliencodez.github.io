$(document).ready(function() {
    change('home');
});

var change = function(section) {
    console.log('changing to ' + section);
    $('section').fadeOut(1000);
    $('#' + section).fadeIn(1000);
}