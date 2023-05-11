"use strict";
const reloadBtn = document.getElementById("reload");
const images = document.querySelectorAll("img");
const loader = document.querySelectorAll(".anime");
const counter = document.querySelector(".counter");
const text = document.querySelector(".text");
const checked = document.querySelectorAll(".check");
let count = 0;
function loaderImg() {
    images.forEach((item, idx) => {
        item.addEventListener("load", () => {
            count++;
            if (counter)
                counter.textContent = `${count}`;
            loader[idx].remove();
            checked.forEach((item) => {
                if (count == 4) {
                    item.remove();
                }
            });
        });
    });
}
loaderImg();
reloadBtn === null || reloadBtn === void 0 ? void 0 : reloadBtn.addEventListener("click", () => {
    window.location.reload();
});
