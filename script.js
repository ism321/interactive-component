const submit = document.querySelector(".submit");
const input = document.querySelector(".input");
const dissmiss = document.querySelector(".dissmiss");
const numbers = document.querySelector(".numbers");
const button = document.querySelectorAll(".button");
const show = document.querySelector(".show");


button.forEach((b) => {
  b.addEventListener("click", function (e) {
     value = b.textContent;
  });
});

submit.addEventListener("click", function (e) {

  if (value) {
    input.classList.remove("hidden");
    numbers.classList.add("hidden");
  }
  show.textContent = value;
  
});
