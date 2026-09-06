// nav點擊事件
// const navSpans = document.querySelectorAll("nav span");
// navSpans.forEach((span) => {
//   span.addEventListener("click", () => {
//     const targetElement = document.getElementById(span.dataset.target);
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   });
// });

// 元素進入視野，作出反應
// 抓單一元素 對元素做變化
// const experience = () => {
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       entries[0].target.classList.toggle("");
//     }
//   });
//   observer.observe(document.getElementById("experience"));
// };
// experience();

// 卡片進入視野，會縮小
// 抓多個元素 對多個元素做變化
const skill_show = () => {
  const skillCards = document.querySelectorAll(".skill__card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  skillCards.forEach((card) => {
    observer.observe(card);
  });
};
skill_show();
