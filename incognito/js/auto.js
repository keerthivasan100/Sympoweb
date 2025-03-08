// $(window).scroll(function () {
//   $(".fadeup").css("opacity", 1 - $(window).scrollTop() / 500);
//   document.getElementById(
//     "registerHeroButton"
//   ).style.background = `linear-gradient(${
//     ($(window).scrollTop() % 360) + 45
//   }deg,var(--neonBlue), var(--neonPink), var(--neonViolet))`;
// });

// function openInNewTab(url) {
//   window.open(url, "_blank").focus();
// }

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".cardContainer");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.addEventListener("click", function () {
    cardContainer.scrollBy({ left: -450, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", function () {
    cardContainer.scrollBy({ left: 450, behavior: "smooth" });
  });
});
