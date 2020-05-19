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

AOS.init();

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});