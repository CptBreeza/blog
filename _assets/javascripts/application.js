//= require_self

$(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.appear').scrollAppear();
  }

  // Fluidbox
  $('.fluidbox-trigger').fluidbox();
});
