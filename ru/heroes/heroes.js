//Поиск
jQuery(document).ready(function() {
    let minlen = 2;
    let paddingtop = 150;
    let scrollspeed = 200;
    let keyint = 1000;
    let term = '';
    let n = 0;
    let time_keyup = 0;
    let time_search = 0;

    jQuery('body').delegate('#spgo', 'click', function() {
        jQuery('body,html').animate({ scrollTop: jQuery('span.highlight:first').offset().top - paddingtop }, scrollspeed);
    });

    function dosearch() {
        term = jQuery('#spterm').val();
        jQuery('span.highlight').each(function() {
            jQuery(this).after(jQuery(this).html()).remove();
        });
        let t = '';
        jQuery('div#content').each(function() {
            jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>'));
            n = jQuery('span.highlight').length;
            console.log('n = ' + n);
            if (n == 0)
                jQuery('#spresult').html('Ничего не найдено');
            else
                jQuery('#spresult').html('Результатов: ' + n + '. <br> <span class="splink" id="spgo">&nbsp;&nbsp;&nbsp;Перейти</span > ');
            if (n > 1) {
                let i = 0;
                jQuery('span.highlight').each(function(i) {
                    jQuery(this).attr('n', i++);
                });
                jQuery('span.highlight').not(':last').attr({ title: 'Нажмите, чтобы перейти к следующему фрагменту' }).click(function() {
                    jQuery('body,html').animate({ scrollTop: jQuery('span.highlight:gt(' + jQuery(this).attr('n') + '):first').offset().top - paddingtop }, scrollspeed);
                });
                jQuery('span.highlight:last').attr({ title: 'Нажмите, чтобы вернуться к форме поиска' }).click(function() {
                    jQuery('body,html').animate({ scrollTop: jQuery('#spterm').offset().top - paddingtop }, scrollspeed);
                });
            }
        });
    }

    jQuery('#spterm').keyup(function() {
        let d1 = new Date();
        time_keyup = d1.getTime();
        if (jQuery('#spterm').val() != term)
            if (jQuery('#spterm').val().length >= minlen) {
                setTimeout(function() {
                    let d2 = new Date();
                    time_search = d2.getTime();
                    if (time_search - time_keyup >= keyint)
                        dosearch();
                }, keyint);
            } else
                jQuery('#spresult').html('&nbsp');
    });

    if (window.location.hash != "") {
        let t = window.location.hash.substr(1, 50);
        jQuery('#spterm').val(t).keyup();
        jQuery('#spgo').click();
    }
});

//Сортировка
$('.all').on('click', () => {
    $('.col').show();
});
$('#tank').on('click', () => {
    $('.col').hide();
    $('.tank').show();
});
$('#bruiser').on('click', () => {
    $('.col').hide();
    $('.bruiser').show();
});
$('#dd').on('click', () => {
    $('.col').hide();
    $('.dd').show();
});
$('#rdd').on('click', () => {
    $('.col').hide();
    $('.rdd').show();
});
$('#support').on('click', () => {
    $('.col').hide();
    $('.support').show();
});
$('#heal').on('click', () => {
    $('.col').hide();
    $('.heal').show();
});
$('#war').on('click', () => {
    $('.col').hide();
    $('.war').show();
});
$('#sc').on('click', () => {
    $('.col').hide();
    $('.sc').show();
});
$('#diablo').on('click', () => {
    $('.col').hide();
    $('.diablo').show();
});
$('#over').on('click', () => {
    $('.col').hide();
    $('.over').show();
});
$('#nexus').on('click', () => {
    $('.col').hide();
    $('.nexus').show();
});

//Кнопка "Вернутся на вверх"
(function() {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

//Окрашивание выбранных классов сортировки
function colorAll() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "blue";
        document.getElementById(`allu${index}col`).style.fill = "blue";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorTank() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "rgb(255,215,0)";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorBruiser() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "rgb(255,140,0)";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorDd() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "rgb(220,20,60)";
        document.getElementById("dd2col").style.fill = "rgb(220,20,60)";
        document.getElementById("dd3col").style.fill = "rgb(220,20,60)";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorRdd() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "rgb(153,50,204)";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorSupport() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "rgb(65,105,225)";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorHeal() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "rgb(0,255,0)";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorWar() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#92611e";
        document.getElementById("war2col").style.fill = "#dba801";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorSc() {

    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    document.getElementById("sc1col").style.fill = "#8A9597";
    document.getElementById("sc2col").style.fill = "rgb(212, 210, 210)";
    document.getElementById("sc3col").style.fill = "rgb(212, 210, 210)";
    document.getElementById("sc4col").style.fill = "#7891a7";
    document.getElementById("sc5col").style.fill = "#577889";
    document.getElementById("sc6col").style.fill = "#577889";
    document.getElementById("sc7col").style.fill = "#7891a7";
    document.getElementById("tankcol").style.fill = "#cce5ff";
    document.getElementById("bruisercol").style.fill = "#cce5ff";
    document.getElementById("dd1col").style.fill = "#cce5ff";
    document.getElementById("dd2col").style.fill = "#cce5ff";
    document.getElementById("dd3col").style.fill = "#cce5ff";
    document.getElementById("rddcol").style.fill = "#cce5ff";
    document.getElementById("supportcol").style.fill = "#cce5ff";
    document.getElementById("healcol").style.fill = "#cce5ff";
    document.getElementById("war1col").style.fill = "#cce5ff";
    document.getElementById("war2col").style.fill = "#cce5ff";
    document.getElementById("diablo1col").style.fill = "#cce5ff";
    document.getElementById("diablo2col").style.fill = "#cce5ff";
    document.getElementById("over1col").style.fill = "#cce5ff";
    document.getElementById("over2col").style.fill = "#cce5ff";
    document.getElementById("nexus1col").style.fill = "#cce5ff";
    document.getElementById("nexus2col").style.fill = "#cce5ff";
    document.getElementById("nexus3col").style.fill = "#cce5ff";
    document.getElementById("nexus4col").style.fill = "#cce5ff";
}

function colorDiablo() {;
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#B32428";
        document.getElementById("diablo2col").style.fill = "#d89953";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorOver() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#f99d2a";
        document.getElementById("over2col").style.fill = "#c4c4c4";
        document.getElementById("nexus1col").style.fill = "#cce5ff";
        document.getElementById("nexus2col").style.fill = "#cce5ff";
        document.getElementById("nexus3col").style.fill = "#cce5ff";
        document.getElementById("nexus4col").style.fill = "#cce5ff";
    }
}

function colorNexus() {
    for (let index = 1; index < 10; index++) {
        document.getElementById(`all${index}col`).style.fill = "#cce5ff";
        document.getElementById(`allu${index}col`).style.fill = "#cce5ff";
    }
    for (let index = 1; index < 10; index++) {
        document.getElementById(`sc${index}col`).style.fill = "#cce5ff";
        document.getElementById("tankcol").style.fill = "#cce5ff";
        document.getElementById("bruisercol").style.fill = "#cce5ff";
        document.getElementById("dd1col").style.fill = "#cce5ff";
        document.getElementById("dd2col").style.fill = "#cce5ff";
        document.getElementById("dd3col").style.fill = "#cce5ff";
        document.getElementById("rddcol").style.fill = "#cce5ff";
        document.getElementById("supportcol").style.fill = "#cce5ff";
        document.getElementById("healcol").style.fill = "#cce5ff";
        document.getElementById("war1col").style.fill = "#cce5ff";
        document.getElementById("war2col").style.fill = "#cce5ff";
        document.getElementById("diablo1col").style.fill = "#cce5ff";
        document.getElementById("diablo2col").style.fill = "#cce5ff";
        document.getElementById("over1col").style.fill = "#cce5ff";
        document.getElementById("over2col").style.fill = "#cce5ff";
        document.getElementById("nexus1col").style.fill = "#6250ff";
        document.getElementById("nexus2col").style.fill = "#be9665";
        document.getElementById("nexus3col").style.fill = "#be9665";
        document.getElementById("nexus4col").style.fill = "#be9665";
    }
}