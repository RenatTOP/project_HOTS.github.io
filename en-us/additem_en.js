//Preloader

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

// Navbar

jQuery.ajax({
  url: "/en-us/navbar.html",
  dataType: "html",
  success: function (response) {
    document.getElementById("navbar").innerHTML = response;
  },
});

//Footer

jQuery.ajax({
  url: "/en-us/footer.html",
  dataType: "html",
  success: function (response) {
    document.getElementById("footer").innerHTML = response;
  },
});

let enUrl = window.location.href;
let ruUrl = enUrl.replace("en-us", "ru");
let uaUrl = enUrl.replace("en-us", "ua");
setTimeout(() => document.getElementById("en").innerHTML = "<a href= " + enUrl + "><img class=\"flag\"src=\"/image/flags/us.svg\" alt=\"English\"></a>", 100);
setTimeout(() => document.getElementById("ru").innerHTML = "<a href= " + ruUrl + "><img class=\"flag\"src=\"/image/flags/ru.svg\" alt=\"Русский\"></a>", 100);

//AOS Effect

AOS.init();

AOS.init({
  disable: false,
  offset: 100,
  once: false,
  mirror: false,
});

//Stats

document.getElementById("dmg").textContent = "Damage";
document.getElementById("spt").textContent = "Utility";
document.getElementById("hp").textContent = "Survivability";
document.getElementById("dfct").textContent = "Complexity";

//Abilities

document.getElementById("heroic").textContent = "Heroic Abilities";
document.getElementById("basic").textContent = "Primary Abilities";
document.getElementById("trait").textContent = "Trait";
