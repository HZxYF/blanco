// Filter the finals table by decade.
// Progressively enhanced: without this script every row stays visible.

(function () {
  var buttons = document.querySelectorAll("[data-decade]");
  var rows = document.querySelectorAll("tbody tr");
  var count = document.getElementById("final-count");

  if (!buttons.length || !rows.length || !count) return;

  function decadeOf(row) {
    var year = parseInt(row.querySelector("th").textContent, 10);
    return Math.floor(year / 10) * 10;
  }

  function apply(decade) {
    var shown = 0;

    rows.forEach(function (row) {
      var match = decade === "all" || decadeOf(row) === decade;
      row.hidden = !match;
      if (match) shown++;
    });

    count.textContent = shown + (shown === 1 ? " final shown" : " finals shown");

    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.decade === decade)
      );
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.dataset.decade);
    });
  });
})();