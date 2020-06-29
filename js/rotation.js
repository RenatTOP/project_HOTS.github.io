let hero1 = raynor;
let hero2 = muradin;
let hero3 = sonya;
let hero4 = nazeebo;
let hero5 = uther;
let hero6 = jaina;
let hero7 = lucio;
let hero8 = tychus;
let hero9 = alexstrasza;
let hero10 = leoric;
let hero11 = arthas;
let hero12 = deathwing;
let hero13 = alarak;
let hero14 = tracer;

if (
  $("div").is(".rotation") == true &&
  $("div").is(".rotation-ua") == false &&
  $("div").is(".rotation-en") == false
) {
  document.querySelectorAll(".rotation")[0].innerHTML = hero1[10];
  document.querySelectorAll(".rotation")[1].innerHTML = hero2[10];
  document.querySelectorAll(".rotation")[2].innerHTML = hero3[10];
  document.querySelectorAll(".rotation")[3].innerHTML = hero4[10];
  document.querySelectorAll(".rotation")[4].innerHTML = hero5[10];
  document.querySelectorAll(".rotation")[5].innerHTML = hero6[10];
  document.querySelectorAll(".rotation")[6].innerHTML = hero7[10];
  document.querySelectorAll(".rotation")[7].innerHTML = hero8[10];
  document.querySelectorAll(".rotation")[8].innerHTML = hero9[10];
  document.querySelectorAll(".rotation")[9].innerHTML = hero10[10];
  document.querySelectorAll(".rotation")[10].innerHTML = hero11[10];
  document.querySelectorAll(".rotation")[11].innerHTML = hero12[10];
  document.querySelectorAll(".rotation")[12].innerHTML = hero13[10];
  document.querySelectorAll(".rotation")[13].innerHTML = hero14[10];
} else if (
  $("div").is(".rotation-ua") == true) {
  document.querySelectorAll(".rotation-ua")[0].innerHTML = hero1[11];
  document.querySelectorAll(".rotation-ua")[1].innerHTML = hero2[11];
  document.querySelectorAll(".rotation-ua")[2].innerHTML = hero3[11];
  document.querySelectorAll(".rotation-ua")[3].innerHTML = hero4[11];
  document.querySelectorAll(".rotation-ua")[4].innerHTML = hero5[11];
  document.querySelectorAll(".rotation-ua")[5].innerHTML = hero6[11];
  document.querySelectorAll(".rotation-ua")[6].innerHTML = hero7[11];
  document.querySelectorAll(".rotation-ua")[7].innerHTML = hero8[11];
  document.querySelectorAll(".rotation-ua")[8].innerHTML = hero9[11];
  document.querySelectorAll(".rotation-ua")[9].innerHTML = hero10[11];
  document.querySelectorAll(".rotation-ua")[10].innerHTML = hero11[11];
  document.querySelectorAll(".rotation-ua")[11].innerHTML = hero12[11];
  document.querySelectorAll(".rotation-ua")[12].innerHTML = hero13[11];
  document.querySelectorAll(".rotation-ua")[13].innerHTML = hero14[11];
} else if (
  $("div").is(".rotation-en") == true) {
  document.querySelectorAll(".rotation-en")[0].innerHTML = hero1[12];
  document.querySelectorAll(".rotation-en")[1].innerHTML = hero2[12];
  document.querySelectorAll(".rotation-en")[2].innerHTML = hero3[12];
  document.querySelectorAll(".rotation-en")[3].innerHTML = hero4[12];
  document.querySelectorAll(".rotation-en")[4].innerHTML = hero5[12];
  document.querySelectorAll(".rotation-en")[5].innerHTML = hero6[12];
  document.querySelectorAll(".rotation-en")[6].innerHTML = hero7[12];
  document.querySelectorAll(".rotation-en")[7].innerHTML = hero8[12];
  document.querySelectorAll(".rotation-en")[8].innerHTML = hero9[12];
  document.querySelectorAll(".rotation-en")[9].innerHTML = hero10[12];
  document.querySelectorAll(".rotation-en")[10].innerHTML = hero11[12];
  document.querySelectorAll(".rotation-en")[11].innerHTML = hero12[12];
  document.querySelectorAll(".rotation-en")[12].innerHTML = hero13[12];
  document.querySelectorAll(".rotation-en")[13].innerHTML = hero14[12];
}
