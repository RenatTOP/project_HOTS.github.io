jQuery.ajax({
    url: "/ru/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });