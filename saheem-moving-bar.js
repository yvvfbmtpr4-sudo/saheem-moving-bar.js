
(function () {
  "use strict";

  var BAR_ID = "saheem-moving-bar";
  var STYLE_ID = "saheem-moving-bar-style";

  function createBar() {
    if (!document.body) return;

    if (document.getElementById(BAR_ID)) return;

    var bar = document.createElement("div");
    bar.id = BAR_ID;
    bar.setAttribute("dir", "rtl");

    var track = document.createElement("div");
    track.className = "saheem-moving-track";

    var text = "✦ الشحن مجاني للطلبات بقيمة 300 ريال فأكثر ✦";

    for (var i = 0; i < 4; i++) {
      var item = document.createElement("span");
      item.textContent = text;
      track.appendChild(item);
    }

    bar.appendChild(track);

    if (!document.getElementById(STYLE_ID)) {
      var style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent =
        "#" + BAR_ID + "{" +
          "display:block;width:100%;overflow:hidden;" +
          "box-sizing:border-box;background:#533c29;" +
          "color:#F5EBE1;padding:11px 0;" +
          "direction:rtl;position:relative;z-index:9999;" +
        "}" +
        "#" + BAR_ID + " .saheem-moving-track{" +
          "display:flex;width:max-content;" +
          "animation:saheemMoving 18s linear infinite;" +
          "will-change:transform;" +
        "}" +
        "#" + BAR_ID + " span{" +
          "display:block;white-space:nowrap;" +
          "padding-left:35px;font-size:15px;" +
          "font-weight:600;line-height:1.5;" +
        "}" +
        "@keyframes saheemMoving{" +
          "from{transform:translateX(0)}" +
          "to{transform:translateX(50%)}" +
        "}" +
        "@media(prefers-reduced-motion:reduce){" +
          "#" + BAR_ID + " .saheem-moving-track{" +
            "animation-duration:40s;" +
          "}" +
        "}";

      document.head.appendChild(style);
    }

    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createBar);
  } else {
    createBar();
  }
})();
