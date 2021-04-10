const btn = document.querySelector("button");
const error = document.querySelector(".error");
const iconError = document.querySelector(".icon-error");
const input = document.querySelector("#email");

function validateEmail() {

  const re = /^.+@\w+\.\w+$/;

  if (re.test(input.value)) {

    error.style.display = "none";
    iconError.style.display = "none";

  } else {

    error.style.display = "block";
    iconError.style.display = "block";

  }
};

btn.addEventListener("click", validateEmail);