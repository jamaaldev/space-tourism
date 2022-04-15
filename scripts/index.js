// Selector
const premNavMobile = document.querySelector(".prem__nav");
const premNavMobileBurger = document.querySelector(".mobile__nav__toggle");

// Event
premNavMobileBurger.addEventListener("click", () => {
  const visibility = premNavMobileBurger.getAttribute("aria-expanded");
  console.log("%c 🏊‍♂️: visibility ", "font-size:16px;background-color:#ce27e7;color:white;", visibility);

  if (visibility === "false") {
    premNavMobileBurger.setAttribute("aria-expanded", "true");
    premNavMobile.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    premNavMobileBurger.setAttribute("aria-expanded", "false");
    premNavMobile.setAttribute("data-visible", "false");
  }
});
