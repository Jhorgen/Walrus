$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").toggle();
    $("#hidden").slideToggle();
  });
});
