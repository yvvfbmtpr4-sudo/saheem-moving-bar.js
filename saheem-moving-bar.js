
(function () {
  "use strict";

  function createBar() {
    if (!document.body ||
        document.getElementById("saheem-moving-bar")) return;

    var bar = document.createElement("div");
    bar.id = "saheem-moving-bar";

    bar.style.cssText =
      "width:100%;overflow:hidden;box-sizing:border-box;" +
      "background:#533c29;color:#F5EBE1;padding:10px 0;" +
      "direction:rtl;position:relative;z-index:9999;";

    var track = document.createElement("div");
    track.style.cssText =
      "display:flex;width:max-content;" +
      "animation:saheemMove 14s linear infinite;";

    for (var i = 0; i < 2; i++) {
      var message = document.createElement("span");
      message.textContent =
        "الشحن مجاني للطلبات بقيمة 300 ريال فأكثر　　✦　　";
      message.style.cssText =
        "display:block;white-space:nowrap;padding-left:20px;" +
        "font-size:15px;font-weight:600;";

      track.appendChild(message);
    }

    bar.appendChild(track);

    if (!document.getElementById("saheem-moving-style")) {
      var style = document.createElement("style");
      style.id = "saheem-moving-style";
      style.textContent =
        "@keyframes saheemMove {" +
        "from { transform: translateX(0); }" +
        "to { transform: translateX(50%); }" +
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
