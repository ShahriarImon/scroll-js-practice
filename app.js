const date = document.getElementById("date");
const linkWarper = document.querySelector(".nav-center .linkWarper");
const links = document.querySelector(".nav-center .linkWarper .links");
const toggleBtn = document.getElementById("toggleBtn");
const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");

date.textContent = new Date().getFullYear();

toggleBtn.addEventListener("click", () => {
  let linkWarperHeight = linkWarper.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;
  if (linkWarperHeight == 0) {
    linkWarper.style.height = `${linksHeight}px`;
  } else {
    linkWarper.style.height = 0;
  }
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
  console.log(scrollHeight);

  if (scrollHeight > 500) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
});

const link = document.querySelectorAll(".link");
link.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const navbarHeight = navbar.getBoundingClientRect().height;
    let linkWarperHeight = linkWarper.getBoundingClientRect().height;
    const element = document.getElementById(id);
    let elementHeight = element.offsetTop - navbarHeight;
    let isSticky = navbar.classList.contains("sticky-nav");
    if (!isSticky) {
      elementHeight = elementHeight - navbarHeight;
    }
    if (linkWarperHeight > 40) {
      elementHeight = elementHeight + linkWarperHeight;
    }
    window.scrollTo({ left: 0, top: elementHeight });
    linkWarper.style.height = 0;
  });
});
