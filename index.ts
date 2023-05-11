const reloadBtn = document.getElementById("reload");
const images = document.querySelectorAll("img");
const loader = document.querySelectorAll(".anime");
const counter = document.querySelector<HTMLElement>(".counter");
const text = document.querySelector(".text");
let count = 0;

console.log(counter);

function loaderImg() {
  images.forEach((item, idx) => {
    item.addEventListener("load", () => {
      count++;
      if (counter) counter.textContent = `${count}`;
      loader[idx].remove();
    });
  });
}
loaderImg();
reloadBtn?.addEventListener("click", () => {
  window.location.reload();
});