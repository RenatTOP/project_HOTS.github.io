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

let addLang = setInterval(
  () => (
    (document.getElementById("en").innerHTML =
      "<a href= " +
      enUrl +
      '><img class="flag"src="/image/flags/us.svg" alt="English"></a>'),
    (document.getElementById("ru").innerHTML =
      "<a href= " +
      ruUrl +
      '><img class="flag"src="/image/flags/ru.svg" alt="Русский"></a>')
  ),
  100
);

setTimeout(() => {
  clearInterval(addLang);
}, 2000);

//AOS Effect
try {
  AOS.init();

  AOS.init({
    disable: false,
    offset: 100,
    once: false,
    mirror: false,
  });
} catch (e) {}

try {
  //Stats

  document.getElementById("dmg").textContent = "Damage";
  document.getElementById("spt").textContent = "Utility";
  document.getElementById("hp").textContent = "Survivability";
  document.getElementById("dfct").textContent = "Complexity";

  //Abilities

  document.getElementById("heroic").textContent = "Heroic Abilities";
  document.getElementById("basic").textContent = "Primary Abilities";
  document.getElementById("trait").textContent = "Trait";
} catch (e) {}
//All stats
try {
  var health = array[0][0];
  var regenHp = array[0][1];
  var mana = array[1][0];
  var regenM = array[1][1];
  var dpa = array[2][0];
  var speedDmg = array[2][1];
  var dps = array[3][0];
  var range = array[3][1];
  var mana1 = array[4][0];
  var cooldown1 = array[4][1];
  var mana2 = array[5][0];
  var cooldown2 = array[5][1];
  var mana3 = array[6][0];
  var cooldown3 = array[6][1];
  var mana4 = array[7][0];
  var cooldown4 = array[7][1];
  var mana5 = array[8][0];
  var cooldown5 = array[8][1];
  var mana6 = array[9][0];
  var cooldown6 = array[9][1];

  // document.getElementById("mana1").textContent = "Mana: " + mana1;
  // document.getElementById("cooldown1").textContent =
  //   "Cooldown: " + cooldown1 + "с";
  // document.getElementById("mana2").textContent = "Mana: " + mana2;
  // document.getElementById("cooldown2").textContent =
  //   "Cooldown: " + cooldown2 + "с";
  // document.getElementById("mana3").textContent = "Mana: " + mana3;
  // document.getElementById("cooldown3").textContent =
  //   "Cooldown: " + cooldown3 + "с";
  // document.getElementById("mana4").textContent = "Mana: " + mana4;
  // document.getElementById("cooldown4").textContent =
  //   "Cooldown: " + cooldown4 + "с";
  // document.getElementById("mana5").textContent = "Mana: " + mana5;
  // document.getElementById("cooldown5").textContent =
  //   "Cooldown: " + cooldown5 + "с";
  // document.getElementById("mana6").textContent = "Mana: " + mana6;

  document.getElementById("health").innerHTML =
    'Health: <span id="hp-p">' + health + "</span>";
  document.getElementById("regen-hp").innerHTML =
    'Regen: <span id="rg-hp-p">' + regenHp + "</span>";
  document.getElementById("mana").innerHTML =
    'Mana: <span id="m-p">' + mana + "</span>";
  document.getElementById("regen-m").innerHTML =
    'Regen: <span id="rg-m-p">' + regenM + "</span>";
  document.getElementById("dpa").innerHTML =
    'Damage per attack: <span id="dpa-p">' + dpa + "</span>";
  document.getElementById("speed-dmg").innerHTML =
    'Attack speed: <span id="sd-p">' + speedDmg + "</span>";
  document.getElementById("dps").innerHTML =
    'Damage per second: <span id="dps-p">' + dps + "</span>";
  document.getElementById("range").innerHTML =
    'Attack range: <span id="r-p">' + range + "</span>";
} catch (e) {}

function Lvl() {
  let lvl = document.querySelector("#lvl");
  let vLvl = document.querySelector(".lvl");
  vLvl.innerHTML = lvl.value;

  let hpP = document.querySelector("#hp-p");
  let rgHpP = document.querySelector("#rg-hp-p");
  let mP = document.querySelector("#m-p");
  let rgMP = document.querySelector("#rg-m-p");
  let dpaP = document.querySelector("#dpa-p");
  let dpsP = document.querySelector("#dps-p");
  let lvlValue = Number(lvl.value);

  let allValueLvlStats = (hpP.textContent = Math.round(
    array[0][0] * (1 + 4 / 100) ** lvlValue
  ));
  rgHpP.textContent =
    Math.round(array[0][1] * (1 + 4 / 100) ** lvlValue * 100) / 100;
  mP.textContent = array[1][0] + lvlValue * 10;
  rgMP.textContent = Math.round((array[1][1] + lvlValue / 10) * 100) / 100;
  dpaP.textContent =
    Math.round(array[2][0] * (1 + 4 / 100) ** lvlValue * 10) / 10;
  dpsP.textContent =
    Math.round(array[3][0] * (1 + 4 / 100) ** lvlValue * 10) / 10;

  if (lvlValue == 0) {
    hpP.textContent = health;
    rgHpP.textContent = regenHp;
    mP.textContent = mana;
    rgMP.textContent = regenM;
    dpaP.textContent = dpa;
    dpsP.textContent = dps;
  } else if (lvlValue == 1) {
    allValueLvlStats;
  } else if (lvlValue == 2) {
    allValueLvlStats;
  } else if (lvlValue == 3) {
    allValueLvlStats;
  } else if (lvlValue == 4) {
    allValueLvlStats;
  } else if (lvlValue == 5) {
    allValueLvlStats;
  } else if (lvlValue == 6) {
    allValueLvlStats;
  } else if (lvlValue == 7) {
    allValueLvlStats;
  } else if (lvlValue == 8) {
    allValueLvlStats;
  } else if (lvlValue == 9) {
    allValueLvlStats;
  } else if (lvlValue == 10) {
    allValueLvlStats;
  } else if (lvlValue == 11) {
    allValueLvlStats;
  } else if (lvlValue == 12) {
    allValueLvlStats;
  } else if (lvlValue == 13) {
    allValueLvlStats;
  } else if (lvlValue == 14) {
    allValueLvlStats;
  } else if (lvlValue == 15) {
    allValueLvlStats;
  } else if (lvlValue == 16) {
    allValueLvlStats;
  } else if (lvlValue == 17) {
    allValueLvlStats;
  } else if (lvlValue == 18) {
    allValueLvlStats;
  } else if (lvlValue == 19) {
    allValueLvlStats;
  } else if (lvlValue == 20) {
    allValueLvlStats;
  } else if (lvlValue == 21) {
    allValueLvlStats;
  } else if (lvlValue == 22) {
    allValueLvlStats;
  } else if (lvlValue == 23) {
    allValueLvlStats;
  } else if (lvlValue == 24) {
    allValueLvlStats;
  } else if (lvlValue == 25) {
    allValueLvlStats;
  } else if (lvlValue == 26) {
    allValueLvlStats;
  } else if (lvlValue == 27) {
    allValueLvlStats;
  } else if (lvlValue == 28) {
    allValueLvlStats;
  } else if (lvlValue == 29) {
    allValueLvlStats;
  } else if (lvlValue == 30) {
    allValueLvlStats;
  }
}
