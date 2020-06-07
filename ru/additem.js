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
  url: "/ru/navbar.html",
  dataType: "html",
  success: function (response) {
    document.getElementById("navbar").innerHTML = response;
  },
});

//Footer

jQuery.ajax({
  url: "/ru/footer.html",
  dataType: "html",
  success: function (response) {
    document.getElementById("footer").innerHTML = response;
  },
});

let ruUrl = window.location.href;
let enUrl = ruUrl.replace("ru", "en-us");
let uaUrl = ruUrl.replace("ru", "ua");
setTimeout(
  () =>
    (document.getElementById("en").innerHTML =
      "<a href= " +
      enUrl +
      '><img class="flag"src="/image/flags/us.svg" alt="English"></a>'),
  500
);
setTimeout(
  () =>
    (document.getElementById("ru").innerHTML =
      "<a href= " +
      ruUrl +
      '><img class="flag"src="/image/flags/ru.svg" alt="Русский"></a>'),
  500
);

//AOS Еффекты

AOS.init();

AOS.init({
  disable: false,
  offset: 100,
  once: false,
  mirror: false,
});

//Stats

document.getElementById("dmg").textContent = "Урон";
document.getElementById("spt").textContent = "Поддержка";
document.getElementById("hp").textContent = "Живучесть";
document.getElementById("dfct").textContent = "Сложность";

//Abilities

document.getElementById("heroic").textContent = "Героические";
document.getElementById("basic").textContent = "Базовые";
document.getElementById("trait").textContent = "Умение";

//Abilities mana and cooldown

document.getElementById("mana1").textContent = "Мана: " + mana1;
document.getElementById("cooldown1").textContent =
  "Перезарядка: " + cooldown1 + "с";
document.getElementById("mana2").textContent = "Мана: " + mana2;
document.getElementById("cooldown2").textContent =
  "Перезарядка: " + cooldown2 + "с";
document.getElementById("mana3").textContent = "Мана: " + mana3;
document.getElementById("cooldown3").textContent =
  "Перезарядка: " + cooldown3 + "с";
document.getElementById("mana4").textContent = "Мана: " + mana4;
document.getElementById("cooldown4").textContent =
  "Перезарядка: " + cooldown4 + "с";
document.getElementById("mana5").textContent = "Мана: " + mana5;
document.getElementById("cooldown5").textContent =
  "Перезарядка: " + cooldown5 + "с";
document.getElementById("mana6").textContent = "Мана: " + mana6;
document.getElementById("cooldown6").textContent =
  "Перезарядка: " + cooldown6 + "с";
