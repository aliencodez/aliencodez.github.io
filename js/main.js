$(window).on("load", function() {
    change('home');
});

var change = function(section) {
    section = '#' + section;
    console.log('changing to ' + section);
    $('section').slideUp();
    $(section).removeClass('hidden');
    $(section).slideDown();
}

var link = function(path) {
    console.log(path);
    window.location = path;
}
