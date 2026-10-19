
(function () {
  if (document.getElementById("saheem-shipping-marquee")) return;

  function addShippingBar() {
    if (!document.body || document.getElementById("saheem-shipping-marquee")) return;

    var bar = document.createElement("div");
    bar.id = "saheem-shipping-marquee";
    bar.innerHTML =
      '<div class="saheem-marquee-track">' +
      '<span>الشحن مجاني للطلبات بقيمة 300 ريال فأكثر</span>' +
      '<span>الشحن مجاني للطلبات بقيمة 300 ريال فأكثر</span>' +
      '<span>الشحن مجاني للطلبات بقيمة 300 ريال فأكثر</span>' +
      '</div>';

    var css = document.createElement("style");
    css.id = "saheem-shipping-marquee-style";
    css.textContent = `
      #saheem-shipping-marquee {
        width: 100%;
        overflow: hidden;
        background: #533c29;
        color: #F5EBE1;
        padding: 10px 0;
        direction: ltr;
        box-sizing: border-box;
        position: relative;
        z-index: 1000;
      }
      #saheem-shipping-marquee .saheem-marquee-track {
        display: flex;
        width: max-content;
        animation: saheem-marquee-scroll 24s linear infinite;
      }
      #saheem-shipping-marquee span {
        flex: 0 0 auto;
        padding: 0 30px;
        white-space: nowrap;
        direction: rtl;
        font-size: 14px;
        font-weight: 500;
      }
      @keyframes saheem-marquee-scroll {
        from { transform: translateX(-33.333%); }
        to { transform: translateX(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        #saheem-shipping-marquee .saheem-marquee-track {
          animation: none;
          width: 100%;
          justify-content: center;
        }
        #saheem-shipping-marquee span:not(:first-child) {
          display: none;
        }
      }
    `;

    document.head.appendChild(css);

    var header = document.querySelector("header");
    if (header && header.parentNode) {
      header.parentNode.insertBefore(bar, header);
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addShippingBar, { once: true });
  } else {
    addShippingBar();
  }
})();
