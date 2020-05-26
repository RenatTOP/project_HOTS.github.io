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
    })
    .fail(function () {
      alert("An error occurred please try again later.");
    });
});

function reCaptcha(selector) {
  var $wg = $(selector);
  $wg.each(function () {
    var id = randomString(10),
      $form = $(this).closest("form");
    $form.find('button[type="submit"]').prop("disabled", true);
    $(this).append($('<div class="g-recaptcha" id="' + id + '"></div>'));
    grecaptcha.render(id, {
      sitekey: $(this).find(".g-recaptcha").data("sitekey") || "",
      callback: function (response) {
        if (!!response) {
          $form.find('button[type="submit"]').prop("disabled", false);
        }
      },
    });
  });
}

// Функция рандомной строки как id
function randomString(length) {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
      ""
    ),
    result = "";
  length = !length ? Math.floor(Math.random() * chars.length) : length;
  for (var i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

//Вызов

var reCaptchaOnLoadCallback = function () {
  reCaptcha(".form-captcha");
};
