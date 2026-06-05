(function () {
  var STORAGE_KEY = "site-theme";
  var DARK_CLASS = "dark-theme";

  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function setTheme(theme) {
    var isDark = theme === "dark";
    document.body.classList.toggle(DARK_CLASS, isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    updateToggles(isDark);
  }

  function updateToggles(isDark) {
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      var darkLabel = button.getAttribute("data-label-dark") || "Dark Mode";
      var lightLabel = button.getAttribute("data-label-light") || "Light Mode";
      var titleDark = button.getAttribute("data-title-dark") || "Switch to dark mode";
      var titleLight = button.getAttribute("data-title-light") || "Switch to light mode";

      button.setAttribute("aria-pressed", isDark ? "true" : "false");
      button.setAttribute("aria-label", isDark ? titleLight : titleDark);
      button.setAttribute("title", isDark ? titleLight : titleDark);

      var label = button.querySelector("span");
      if (label) {
        label.textContent = isDark ? lightLabel : darkLabel;
      }

      var icon = button.querySelector(".toggle-icon");
      if (icon) {
        icon.textContent = isDark ? "☀" : "☾";
      }
    }
  }

  function init() {
    var initial = getPreferredTheme();
    var isDark = initial === "dark";
    document.body.classList.toggle(DARK_CLASS, isDark);
    updateToggles(isDark);

    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        var nextIsDark = !document.body.classList.contains(DARK_CLASS);
        setTheme(nextIsDark ? "dark" : "light");
      });
    }

    window.addEventListener("copilot-language-changed", function () {
      var isDarkNow = document.body.classList.contains(DARK_CLASS);
      updateToggles(isDarkNow);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
