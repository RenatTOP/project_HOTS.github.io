//Поиск
jQuery(function ($) {
  $("#content").lookingfor({
    input: $('input[name="query"]'),
    items: "div",
  });
});

$.fn.oldtoggle = function () {
  var b = arguments;

  return this.each(function (i, el) {
    var a = (function () {
      var c = 0;

      return function () {
        b[c++ % b.length].apply(el, arguments);
      };
    })();

    $(el).click(a);
  });
};

//Filter init

var containerEl = document.querySelector(".row");

var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
  },
});

//Окрашивание выбранных классов фильтрации

$("#tank").oldtoggle(
  function () {
    $(".tankColor").css({ fill: "rgb(255,215,0)" });
  },
  function () {
    $(".tankColor").css({ fill: "#cce5ff" });
  }
);

$("#bruiser").oldtoggle(
  function () {
    $(".bruiserColor").css({ fill: "rgb(255,140,0)" });
  },
  function () {
    $(".bruiserColor").css({ fill: "#cce5ff" });
  }
);

$("#dd").oldtoggle(
  function () {
    $(".ddColor").css({ fill: "rgb(220,20,60)" });
  },
  function () {
    $(".ddColor").css({ fill: "#cce5ff" });
  }
);

$("#rdd").oldtoggle(
  function () {
    $(".rddColor").css({ fill: "rgb(153,50,204)" });
  },
  function () {
    $(".rddColor").css({ fill: "#cce5ff" });
  }
);

$("#support").oldtoggle(
  function () {
    $(".supportColor").css({ fill: "rgb(65,105,225)" });
  },
  function () {
    $(".supportColor").css({ fill: "#cce5ff" });
  }
);

$("#heal").oldtoggle(
  function () {
    $(".healColor").css({ fill: "rgb(0,255,0)" });
  },
  function () {
    $(".healColor").css({ fill: "#cce5ff" });
  }
);

$("#war").oldtoggle(
  function () {
    $("#war").removeClass("off");
    $(".war1Color").css({ fill: "#92611e" });
    $(".war2Color").css({ fill: "#dba801" });
  },
  function () {
    $("#war").addClass("off");
  }
);

$("#sc").oldtoggle(
  function () {
    $("#sc").removeClass("off");
    $(".sc1Color").css({ fill: "#8A9597" });
    $(".sc2Color").css({ fill: "rgb(212, 210, 210)" });
    $(".sc3Color").css({ fill: "rgb(212, 210, 210)" });
    $(".sc4Color").css({ fill: "#7891a7" });
    $(".sc5Color").css({ fill: "#577889" });
    $(".sc6Color").css({ fill: "#577889" });
    $(".sc7Color").css({ fill: "#7891a7" });
  },
  function () {
    $("#sc").addClass("off");
  }
);

$("#diablo").oldtoggle(
  function () {
    $("#diablo").removeClass("off");
    $(".diablo1Color").css({ fill: "#B32428" });
    $(".diablo2Color").css({ fill: "#d89953" });
  },
  function () {
    $("#diablo").addClass("off");
  }
);

$("#over").oldtoggle(
  function () {
    $("#over").removeClass("off");
    $(".over1Color").css({ fill: "#f99d2a" });
    $(".over2Color").css({ fill: "#c4c4c4" });
  },
  function () {
    $("#over").addClass("off");
  }
);

$("#nexus").oldtoggle(
  function () {
    $("#nexus").removeClass("off");
    $(".nexus1Color").css({ fill: "#6250ff" });
    $(".nexus2Color").css({ fill: "#be9665" });
    $(".nexus3Color").css({ fill: "#be9665" });
    $(".nexus4Color").css({ fill: "#be9665" });
  },
  function () {
    $("#nexus").addClass("off");
  }
);
