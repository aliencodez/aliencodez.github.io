$(window).on("load", function() {
    change('home');
});

var change = function(section) {
    console.log('changing to ' + section);
    $('section').slideUp();
    $('#' + section).slideDown();
}

var link = function(path) {
    console.log(path);
    window.location = path;
}