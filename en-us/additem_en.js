// Navbar
jQuery.ajax({
    url: "/en-us/navbar.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('navbar').innerHTML = response;
    }
    });

//Footer
jQuery.ajax({
    url: "/en-us/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });

//Stats
document.getElementById('dmg').textContent = "Damage";
document.getElementById('spt').textContent = "Utility";
document.getElementById('hp').textContent = "Survivability";
document.getElementById('dfct').textContent = "Complexity";
//Abilities
document.getElementById('heroic').textContent = "Heroic Abilities";
document.getElementById('basic').textContent = "Primary Abilities";
document.getElementById('trait').textContent = "Trait";