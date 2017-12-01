/* Navbar changed on scroll. Based on https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll */

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".navbar").addClass("sticky");
    $(".nav-item-normal").addClass("nav-item-inv");
    $(".nav-item-normal").removeClass("nav-item-normal");
  } else if (scroll < 100) {
    $(".navbar").removeClass("sticky");
    $(".nav-item-inv").addClass("nav-item-normal");
    $(".nav-item-inv").removeClass("nav-item-inv");
  }
});


/* Utilising boostrap navbar collapse event - https://v4-alpha.getbootstrap.com/components/collapse/  */

$('.navbar-collapse').on('show.bs.collapse', function() {
  $(".navbar").addClass("expandedNav");
})

$('.navbar-collapse').on('hide.bs.collapse', function() {
  $(".navbar").removeClass("expandedNav");
})
