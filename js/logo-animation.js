var div = document.getElementById("logo-image");
var img = div.childNodes[1];
var text = div.childNodes[3];

text.style.opacity = 0;

img.addEventListener("mouseover", function() {
  text.style.opacity = 1;
});

img.addEventListener("mouseout", function() {
  text.style.opacity = 0;
});
