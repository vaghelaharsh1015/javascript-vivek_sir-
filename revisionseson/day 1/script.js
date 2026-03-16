const btn = document.getElementById("backToTop");

window.onscroll = () => {
  const scrollDist =
    document.documentElement.scrollTop || document.body.scrollTop;
  btn.style.display = scrollDist > 20 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
