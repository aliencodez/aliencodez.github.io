$(window).on("load", function() {
    change('home');
});

var change = function(section) {
    console.log('changing to ' + section);
    $('section').fadeOut(1000);
    $('#' + section).fadeIn(1000);
}

var link = function(path) {
    console.log(path);
    window.location = path;
}