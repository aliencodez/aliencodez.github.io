function change(section) {
    $('html, body').animate({
        scrollTop: $("#" + section).offset().top
    }, 1000);
}