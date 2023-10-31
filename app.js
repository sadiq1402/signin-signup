const container = document.querySelector(".container");
const section = document.querySelector("section");
const linkToggle = document.querySelectorAll("a");

function toggleForm() {
  container.classList.toggle("active");
  section.classList.toggle("active");
}

linkToggle.forEach((a) =>
  a.addEventListener("click", () => {
    toggleForm();
  })
);
