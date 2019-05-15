function sticky_book() {
  var window_scrollTop = $(window).scrollTop();
  var trigger = $("#details").offset().top;
  var stickyH = $("#book").outerHeight(true);
  $("#book_fpo").css("height", stickyH);
  if (window_scrollTop > (trigger + stickyH)) {
    $("#book").addClass("lock");
    $("#book_fpo").show();
  } else {
    $("#book").removeClass("lock");
    $("#book_fpo").hide();
  }
  if($('#animateCbx').is(':checked')) {
    $("#book").addClass("slide");
  } else {
    $("#book").removeClass("slide");
  }
}

$(function() {
  $(window).scroll(sticky_book);
  sticky_book();
});
