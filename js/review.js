$("#ajaxForm").submit(function (e) {
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    contentType: "multipart/form-data",
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
    },
  })
    .done(function () {
      $(".success").addClass("is-active");
      setTimeout(() => history.go(-1), 4000);
    })
    .fail(function () {
      alert("An error occurred please try again later.");
    });
});
