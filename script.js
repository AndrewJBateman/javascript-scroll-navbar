const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

fixNav = () => {
  console.log("window.scrollY", window.scrollY, "topOfNav", topOfNav);
  if (window.scrollY >= topOfNav) {
    console.info("window.scrollY >= topOfNav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
};

window.addEventListener("scroll", fixNav);
