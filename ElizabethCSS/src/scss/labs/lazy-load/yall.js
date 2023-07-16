/** ! Lazy load - yall.js **/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (undefined) {}).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

var yall = function () {
  "use strict";

  return function (e) {
    var n = (e = e || {}).lazyClass || "lazy",
        t = e.lazyBackgroundClass || "lazy-bg",
        o = "idleLoadTimeout" in e ? e.idleLoadTimeout : 200,
        i = e.observeChanges || !1,
        r = e.events || {},
        a = window,
        s = "requestIdleCallback",
        u = "IntersectionObserver",
        c = ["srcset", "src", "poster"],
        d = [],
        l = function l(e, o) {
      return d.slice.call((o || document).querySelectorAll(e || "img." + n + ",video." + n + ",iframe." + n + ",." + t));
    },
        f = function f(n) {
      var o,
          i = n.parentNode;
      "PICTURE" == i.nodeName && (o = i), "VIDEO" == n.nodeName && (o = n), g(l("source", o), b), b(n), n.autoplay && n.load();
      var r = n.classList;
      r.contains(t) && (r.remove(t), r.add(e.lazyBackgroundLoaded || "lazy-bg-loaded"));
    },
        v = function v(e) {
      for (var n in r) {
        e.addEventListener(n, r[n].listener || r[n], r[n].options || void 0);
      }
    },
        b = function b(e) {
      var n = function n(_n) {
        c[_n] in e.dataset && a.requestAnimationFrame(function () {
          e.setAttribute(c[_n], e.dataset[c[_n]]);
        });
      };

      for (var t in c) {
        n(t);
      }
    },
        g = function g(e, n) {
      for (var t = 0; t < e.length; t++) {
        n instanceof a[u] ? n.observe(e[t]) : n(e[t]);
      }
    },
        m = function m(e) {
      if (e.isIntersecting || e.intersectionRatio) {
        var t = e.target;
        s in a && o ? a[s](function () {
          f(t);
        }, {
          timeout: o
        }) : f(t), t.classList.remove(n), p.unobserve(t), (h = h.filter( (e) => {
          return e != t;
        })).length || i || p.disconnect();
      }
    },
        y = function y(e) {
      h.indexOf(e) < 0 && (h.push(e), v(e), p.observe(e));
    },
        h = l();

    if (/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent)) g(h, f);else if (u in a && u + "Entry" in a) {
      var p = new a[u]( (e) => {
        g(e, m);
      }, {
        rootMargin: ("threshold" in e ? e.threshold : 200) + "px 0%"
      });
      g(h, v), g(h, p), i && g(l(e.observeRootSelector || "body"), (n)=> {
        new MutationObserver( () => {
          g(l(), y);
        }).observe(n, e.mutationObserverOptions || {
          childList: !0,
          subtree: !0
        });
      });
    }
  };
}();
document.addEventListener("DOMContentLoaded", () => {
  yall({
    threshold: 50,
    observeChanges: !0,
    events: {
      load: function load(a) {
        a.target.classList.contains("lazy") || "IMG" != a.target.nodeName || a.target.classList.add("lazy-loaded");
      }
    }
  });
});
//# sourceMappingURL=yall.js.map