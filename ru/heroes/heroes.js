//Search

jQuery(function ($) {
  $("#content").lookingfor({
    input: $('input[name="query"]'),
    items: "div",
  });
});

//Filter init

var containerEl = document.querySelector(".row");

var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
  }
});