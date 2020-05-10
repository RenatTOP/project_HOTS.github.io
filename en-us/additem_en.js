jQuery.ajax({
    url: "/en-us/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });