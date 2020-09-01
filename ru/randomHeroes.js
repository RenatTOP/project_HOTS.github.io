//Массив с героями
var heroes = [];

heroes[0] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/anduin.html"><img src="/image/heroes/Anduin/anduinbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Андуин</h3>
    </a>
</div>`;
heroes[1] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/anubarak.html"><img src="/image/heroes/Anub'arak/anubarakbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ануб'арак</h3>
    </a>
</div>`;
heroes[2] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/artanis.html"><img src="/image/heroes/Artanis/artanisbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Артанис</h3>
    </a>
</div>`;
heroes[3] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/support/abathur.html"><img src="/image/heroes/Abathur/abathurbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Абатур</h3>
    </a>
</div>`;
heroes[4] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/azmodan.html"><img src="/image/heroes/Azmodan/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Азмодан</h3>
    </a>
</div>`;
heroes[5] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/alarak.html"><img src="/image/heroes/Alarak/alarakbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Аларак</h3>
    </a>
</div>`;
heroes[6] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/alexstrasza.html"><img src="/image/heroes/Alexstrasza/alexstrazabgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Алекстраза</h3>
    </a>
</div>`;
heroes[7] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/ana.html"><img src="/image/heroes/Ana/anabgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ана</h3>
    </a>
</div>`;
heroes[8] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/arthas.html"><img src="/image/heroes/Arthas/arthasbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Артас</h3>
    </a>
</div>`;
heroes[9] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/auriel.html"><img src="/image/heroes/Auriel/aurielbgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ауриэль</h3>
    </a>
</div>`;
heroes[10] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/blaze.html"><img src="/image/heroes/Blaze/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Блейз</h3>
    </a>
</div>`;
heroes[11] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/whitemane.html"><img src="/image/heroes/Whitemane/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Вайтмейн</h3>
    </a>
</div>`;
heroes[12] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/valeera.html"><img src="/image/heroes/Valeera/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Валира</h3>
    </a>
</div>`;
heroes[13] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/valla.html"><img src="/image/heroes/Valla/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Валла</h3>
    </a>
</div>`;
heroes[14] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/varian.html"><img src="/image/heroes/Varian/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Вариан</h3>
    </a>
</div>`;
heroes[15] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/support/vikings.html"><img src="/image/heroes/LostVikings/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Викинги</h3>
    </a>
</div>`;
heroes[16] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/gazlowe.html"><img src="/image/heroes/Gazlowe/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Газлоу</h3>
    </a>
</div>`;
heroes[17] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/unique/chogall.html"><img src="/image/heroes/Gall/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Галл</h3>
    </a>
</div>`;
heroes[18] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/garrosh.html"><img src="/image/heroes/Garrosh/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Гаррош</h3>
    </a>
</div>`;
heroes[19] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/guldan.html"><img src="/image/heroes/Guldan/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Гул'дан</h3>
    </a>
</div>`;
heroes[20] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/genji.html"><img src="/image/heroes/Genji/bgm.png" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Гэндзи</h3>
    </a>
</div>`;
heroes[21] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/deckard.html"><img src="/image/heroes/Deckard/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Декард</h3>
    </a>
</div>`;
heroes[22] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/dehaka.html"><img src="/image/heroes/Dehaka/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Дехака</h3>
    </a>
</div>`;
heroes[23] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/jaina.html"><img src="/image/heroes/Jaina/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Джайна</h3>
    </a>
</div>`;
heroes[24] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/johanna.html"><img src="/image/heroes/Johanna/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Джоанна</h3>
    </a>
</div>`;
heroes[25] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/diablo.html"><img src="/image/heroes/Diablo/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Диабло</h3>
    </a>
</div>`;
heroes[26] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/etc.html"><img src="/image/heroes/E.T.C/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Е.Т.С</h3>
    </a>
</div>`;
heroes[27] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/zagara.html"><img src="/image/heroes/Zagara/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Загара</h3>
    </a>
</div>`;
heroes[28] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/support/zarya.html"><img src="/image/heroes/Zarya/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Заря</h3>
    </a>
</div>`;
heroes[29] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/zeratul.html"><img src="/image/heroes/Zeratul/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Зератул</h3>
    </a>
</div>`;
heroes[30] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/xul.html"><img src="/image/heroes/Xul/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Зул</h3>
    </a>
</div>`;
heroes[31] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/zuljin.html"><img src="/image/heroes/Zuljin/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Зул'джин</h3>
    </a>
</div>`;
heroes[32] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/illidan.html"><img src="/image/heroes/Illidan/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Иллидан</h3>
    </a>
</div>`;
heroes[33] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/imperius.html"><img src="/image/heroes/Imperius/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Империй</h3>
    </a>
</div>`;
heroes[34] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/yrel.html"><img src="/image/heroes/Yrel/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ирель</h3>
    </a>
</div>`;
heroes[35] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/kharazim.html"><img src="/image/heroes/Kharazim/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Каразим</h3>
    </a>
</div>`;
heroes[36] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/cassia.html"><img src="/image/heroes/Cassia/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Кассия</h3>
    </a>
</div>`;
heroes[37] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/qhira.html"><img src="/image/heroes/Qhira/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Кахира</h3>
    </a>
</div>`;
heroes[38] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/kelthuzad.html"><img src="/image/heroes/Kelthuzad/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Кел'Тузад</h3>
    </a>
</div>`;
heroes[39] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/kaelthas.html"><img src="/image/heroes/Kaelthas/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Кель'тас</h3>
    </a>
</div>`;
heroes[40] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/kerrigan.html"><img src="/image/heroes/Kerrigan/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Керриган</h3>
    </a>
</div>`;
heroes[41] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/junkrat.html"><img src="/image/heroes/Junkrat/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Крысавчик</h3>
    </a>
</div>`;
heroes[42] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/hammer.html"><img src="/image/heroes/Sgthammer/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Кувалда</h3>
    </a>
</div>`;
heroes[43] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/leoric.html"><img src="/image/heroes/Leoric/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Леорик</h3>
    </a>
</div>`;
heroes[44] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/lili.html"><img src="/image/heroes/LiLi/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ли Ли</h3>
    </a>
</div>`;
heroes[45] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/liming.html"><img src="/image/heroes/Liming/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Ли-Мин</h3>
    </a>
</div>`;
heroes[46] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/lunara.html"><img src="/image/heroes/Lunara/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Лунара</h3>
    </a>
</div>`;
heroes[47] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/lucio.html"><img src="/image/heroes/Lucio/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Лусио</h3>
    </a>
</div>`;
heroes[48] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/maiev.html"><img src="/image/heroes/Maiev/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Майев</h3>
    </a>
</div>`;
heroes[49] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/malganis.html"><img src="/image/heroes/Malganis/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Мал'Ганис</h3>
    </a>
</div>`;
heroes[50] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/malthael.html"><img src="/image/heroes/Malthael/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Малтаэль</h3>
    </a>
</div>`;
heroes[51] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/malfurion.html"><img src="/image/heroes/Malfurion/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Малфурион</h3>
    </a>
</div>`;
heroes[52] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/support/medivh.html"><img src="/image/heroes/Medivh/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Медив</h3>
    </a>
</div>`;
heroes[53] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/mephisto.html"><img src="/image/heroes/Mephisto/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Мефисто</h3>
    </a>
</div>`;
heroes[54] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/morales.html"><img src="/image/heroes/Lt.Morales/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Моралес</h3>
    </a>
</div>`;
heroes[55] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/muradin.html"><img src="/image/heroes/Muradin/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Мурадин</h3>
    </a>
</div>`;
heroes[56] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/murky.html"><img src="/image/heroes/Murky/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Мурчаль</h3>
    </a>
</div>`;
heroes[57] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/butcher.html"><img src="/image/heroes/Butcher/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Мясник</h3>
    </a>
</div>`;
heroes[58] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/nazeebo.html"><img src="/image/heroes/Nazeebo/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Назибо</h3>
    </a>
</div>`;
heroes[59] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/nova.html"><img src="/image/heroes/Nova/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Нова</h3>
    </a>
</div>`;
heroes[60] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/orphea.html"><img src="/image/heroes/Orphea/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Орфея</h3>
    </a>
</div>`;
heroes[61] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/probius.html"><img src="/image/heroes/Probius/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Пробиус</h3>
    </a>
</div>`;
heroes[62] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/ragnaros.html"><img src="/image/heroes/Ragnaros/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Рагнарос</h3>
    </a>
</div>`;
heroes[63] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/rehgar.html"><img src="/image/heroes/Rehgar/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Регар</h3>
    </a>
</div>`;
heroes[64] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/raynor.html"><img src="/image/heroes/Raynor/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Рейнор</h3>
    </a>
</div>`;
heroes[65] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/rexxar.html"><img src="/image/heroes/Rexxar/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Рексар</h3>
    </a>
</div>`;
heroes[66] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/dd/samuro.html"><img src="/image/heroes/Samuro/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Самуро</h3>
    </a>
</div>`;
heroes[67] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/brightwing.html"><img src="/image/heroes/Brightwing/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Светик</h3>
    </a>
</div>`;
heroes[68] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/graymane.html"><img src="/image/heroes/Greymane/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Седогрив</h3>
    </a>
</div>`;
heroes[69] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/sylvanas.html"><img src="/image/heroes/Sylvanas/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Сильвана</h3>
    </a>
</div>`;
heroes[70] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/deathwing.html"><img src="/image/heroes/Deathwing/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Смертокрыл</h3>
    </a>
</div>`;
heroes[71] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/sonya.html"><img src="/image/heroes/Sonya/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Соня</h3>
    </a>
</div>`;
heroes[72] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/stitches.html"><img src="/image/heroes/Stitches/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Стежок</h3>
    </a>
</div>`;
heroes[73] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/stukov.html"><img src="/image/heroes/Stukov/bgm.png" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Стуков</h3>
    </a>
</div>`;
heroes[74] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/tychus.html"><img src="/image/heroes/Tychus/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Тайкус</h3>
    </a>
</div>`;
heroes[75] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/tassadar.html"><img src="/image/heroes/Tassadar/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Тассадар</h3>
    </a>
</div>`;
heroes[76] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/tyrande.html"><img src="/image/heroes/Tyrande/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Тиранда</h3>
    </a>
</div>`;
heroes[77] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/tank/tyrael.html"><img src="/image/heroes/Tyrael/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Тираэль</h3>
    </a>
</div>`;
heroes[78] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/thrall.html"><img src="/image/heroes/Thrall/bgn.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Тралл</h3>
    </a>
</div>`;
heroes[79] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/tracer.html"><img src="/image/heroes/Tracer/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Трейсер</h3>
    </a>
</div>`;
heroes[80] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/heal/uther.html"><img src="/image/heroes/Uther/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Утер</h3>
    </a>
</div>`;
heroes[81] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/falstad.html"><img src="/image/heroes/Falstad/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Фалстад</h3>
    </a>
</div>`;
heroes[82] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/feniks.html"><img src="/image/heroes/Fenix/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Феникс</h3>
    </a>
</div>`;
heroes[83] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/hanzo.html"><img src="/image/heroes/Hanzo/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Хандзо</h3>
    </a>
</div>`;
heroes[84] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/rdd/chromie.html"><img src="/image/heroes/Chromie/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Хроми</h3>
    </a>
</div>`;
heroes[85] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/unique/chogall.html"><img src="/image/heroes/Cho/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Чо</h3>
    </a>
</div>`;
heroes[86] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/chen.html"><img src="/image/heroes/Chen/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">Чэнь</h3>
    </a>
</div>`;
heroes[87] = `<div class="rdmHeroes col-3" data-aos="flip-left">
    <a href="/ru/heroes/bruiser/dva.html"><img src="/image/heroes/Dva/bgm.jpg" alt="" class="rdmImg">
        <h3 class="rdmheroesh3">D.Va</h3>
    </a>
</div>`;

//Случайный выбор героя без повторений
var selestedHeroes = [];

for (let i = 0; i < 4; i++) {
  let index = Math.floor(Math.random() * heroes.length);
  selestedHeroes.push(heroes[index]);
  heroes.splice(index, 1);
}
document.querySelectorAll(".randomHeroes")[0].innerHTML =
  "<h2>Другие герои</h2>" + selestedHeroes;
