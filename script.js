$(".buy").click(function () {
  $(".bottom").addClass("clicked");
});

$(".remove").click(function () {
  $(".bottom").removeClass("clicked");
});
$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
});
