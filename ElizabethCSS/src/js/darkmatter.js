/** ! Mode dark **/
( ()=> {
  const t = document.documentElement,
      e = localStorage.getItem("theme-prefer-color");
  e && t.setAttribute("data-theme", e), document.addEventListener("DOMContentLoaded", ()=> {
    const o = document.querySelector(".mode-dark");
    e && o.setAttribute("data-set-theme", e), o.addEventListener("click", ()=> {
      const e = o.dataset.setTheme;
      "light" === e ? (o.setAttribute("data-set-theme", "dark"), localStorage.setItem("theme-prefer-color", "dark"), t.setAttribute("data-theme", "dark")) : (o.setAttribute("data-set-theme", "light"), localStorage.setItem("theme-prefer-color", "light"), t.setAttribute("data-theme", "light"));
    });
  });
})();