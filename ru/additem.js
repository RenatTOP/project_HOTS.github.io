// Navbar
jQuery.ajax({
    url: "/ru/navbar.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('navbar').innerHTML = response;
    }
    });
    
//Footer
jQuery.ajax({
    url: "/ru/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });

//Stats
document.getElementById('dmg').textContent = "Урон";
document.getElementById('spt').textContent = "Поддержка";
document.getElementById('hp').textContent = "Живучесть";
document.getElementById('dfct').textContent = "Сложность";

//Abilities
document.getElementById('heroic').textContent = "Героические";
document.getElementById('basic').textContent = "Базовые";
document.getElementById('trait').textContent = "Умение";

//AOS Еффекты
AOS.init();

AOS.init({
  disable: false,
  offset: 100,
  once: false,
  mirror: false,
});