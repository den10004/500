const openModal = document.querySelector(".header__menu-min");
const modalClose = document.querySelector(".modalClose");
const modal = document.querySelector(".modal");

const modalToggle = () => {
  modal.style.display = "block";
};

const closeToggle = () => {
  modal.style.display = "none";
};

openModal.addEventListener("click", modalToggle);
modalClose.addEventListener("click", closeToggle);

const acc = document.getElementsByClassName("accordion");

let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const modacc = document.getElementsByClassName("mod-accordion");

let ic;
for (ic = 0; i < modacc.length; ic++) {
  modacc[ic].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector(".input-tel");
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  IMask(inputElement, maskOptions);
});
