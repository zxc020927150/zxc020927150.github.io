// nav點擊事件
const navSpans = document.querySelectorAll("nav span");
navSpans.forEach((span) => {
  span.addEventListener("mouseenter", () => {
    span.classList.toggle("navspan__mouseover");
  });
  span.addEventListener("mouseleave", () => {
    span.classList.toggle("navspan__mouseover");
  });
  span.addEventListener("click", () => {
    const targetElement = document.getElementById(span.dataset.target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
