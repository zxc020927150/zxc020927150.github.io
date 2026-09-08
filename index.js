//nav 進入到該區塊會顯示正在哪個區塊
const nav_into = () => {
  const sections = document.querySelectorAll("section"); //觀察對象們
  const navlinks = document.querySelectorAll("nav a"); //修改對象們
  const navlinks_span = document.querySelectorAll("nav a span"); //修改對象們
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter(
        (entry) => entry.isIntersecting, //篩選有進入的區塊，可能有多個
      );
      if (visible.length === 0) return; //都沒進入，不處理

      //同時進入多個的話，挑「頂端最靠近 0」的那一個當作目前所在區塊 (取絕對值最小)
      const current = visible.reduce((closest, entry) =>
        Math.abs(entry.boundingClientRect.top) <
        Math.abs(closest.boundingClientRect.top)
          ? entry
          : closest,
      );

      const id = current.target.id;
      const currentlink = document.querySelector(`nav a[href="#${id}"]`); //找到正確修改對象
      const currentlink_sapn = document.querySelector(`nav a[href="#${id}"] span`); //找到正確修改對象

      navlinks.forEach((navlink) => {
        navlink.classList.remove("nav_a");
      }); // 先清空
      navlinks_span.forEach((navlink) => {
        navlink.classList.remove("nav_a_span");
      }); // 先清空

      if (currentlink) {
        currentlink.classList.add("nav_a");
      } // 不是每個區域都有對應的 nav a 有的才新增
      if (currentlink_sapn) {
        currentlink_sapn.classList.add("nav_a_span");
      } // 不是每個區域都有對應的 nav a span 有的才新增
    },
    { rootMargin: "-49% 0px -50% 0px" }, //觸發範圍
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
