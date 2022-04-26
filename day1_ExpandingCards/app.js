const panels = document.querySelectorAll(".panel");

panels.forEach((element) => {
  element.addEventListener("click", () => {
    resetClassActive();
    element.classList.add("active");
  });
});

const resetClassActive = () => {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
};
