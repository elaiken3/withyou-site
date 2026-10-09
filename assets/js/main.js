// Progressive enhancement only: the page is complete without this file.
(function () {
  var menu = document.querySelector(".menu");
  if (!menu) return;
  var toggle = menu.querySelector("summary");

  function close(returnFocus) {
    if (!menu.open) return;
    menu.open = false;
    if (returnFocus && toggle) toggle.focus();
  }

  // Close after choosing a section.
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) close(false);
  });
  // Escape closes and returns focus to the toggle.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close(true);
  });
  // A tap outside closes it.
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) close(false);
  });
})();
