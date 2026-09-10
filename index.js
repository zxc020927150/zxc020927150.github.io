// 深色模式
const theme = () => {
  const button = document.querySelector(".data__theme");
  const html = document.documentElement;
  const icon = document.querySelector(".data__theme i");
  const theme = localStorage.getItem("theme");
  // 判斷localStorage儲存的使用者習慣，沒有就是淺色
  if (theme === "dark") {
    icon.className = "fa-regular fa-sun";
    html.setAttribute("data-theme", "dark");
    button.setAttribute("aria-label", "切換淺色模式");
    button.setAttribute("title", "切換淺色模式");
  }
  // 會切換icon跟提示字，並記錄在localStorage
  button.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      icon.className = "fa-regular fa-moon";
      html.removeAttribute("data-theme");
      button.setAttribute("aria-label", "切換深色模式");
      button.setAttribute("title", "切換深色模式");
      localStorage.setItem("theme", "light");
    } else {
      icon.className = "fa-regular fa-sun";
      html.setAttribute("data-theme", "dark");
      button.setAttribute("aria-label", "切換淺色模式");
      button.setAttribute("title", "切換淺色模式");
      localStorage.setItem("theme", "dark");
    }
  });
};
theme();

//漢堡選單
const navbar = () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  const links = document.querySelectorAll(".nav__link");
  // 點擊漢堡選單切換開關
  toggle.addEventListener("click", () => {
    menu.classList.toggle("isOpen");
    menu.classList.contains("isOpen")
      ? toggle.setAttribute("aria-expanded", true)
      : toggle.setAttribute("aria-expanded", false);
  });
  // 點擊link會關掉選單
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", false);
    });
  });
};
navbar();

//nav 進入到該區塊會顯示正在哪個區塊
const nav_into = () => {
  const sections = document.querySelectorAll("section"); //觀察對象們
  const nav__links = document.querySelectorAll(".nav__link"); //修改對象們
  const nav__items = document.querySelectorAll(".nav__item"); //修改對象們

  const observer = new IntersectionObserver(
    (entries) => {
      //篩選有進入的區塊，可能有多個，都沒進入，就不處理
      const visible = entries.filter(
        (entry) => entry.isIntersecting, 
      );
      if (visible.length === 0) return;

      //同時進入多個的話，挑「頂端最靠近 0」的那一個當作目前所在區塊 (取絕對值最小)
      const current = visible.reduce((closest, entry) =>
        Math.abs(entry.boundingClientRect.top) <
        Math.abs(closest.boundingClientRect.top)
          ? entry
          : closest,
      );
      sections.forEach((section)=>{
        section.removeAttribute("aria-current")
      })
      console.log(current)
      current.target.setAttribute("aria-current","true")

      // 取目標對象id
      const id = current.target.id;

      // 更改字體大小
      const current_link = document.querySelector(
        `.nav__item a[href="#${id}"]`,
      ); 
      nav__links.forEach((nav__link) => {
        nav__link.classList.remove("into");
      });
      if (current_link) {
        current_link.classList.add("into");
      }

      // 更改背景
      nav__items.forEach((nav__item) => {
        nav__item.classList.remove("bg");
      });
      if (current_link) {
        const current_item = current_link.closest(".nav__item");
        if (current_item) {
          current_item.classList.add("bg");
        }
      }
    },
    { rootMargin: "-40% 0px -60% 0px" }, //觸發範圍
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
};
nav_into();

// skill區塊效果
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

// experience區塊效果
const experience_wrapper = () => {
  const wrappers = document.querySelectorAll(".experience__wrapper");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  wrappers.forEach((wrapper) => {
    observer.observe(wrapper);
  });
};
experience_wrapper();
